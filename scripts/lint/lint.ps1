<#
.SYNOPSIS
    Lint gate for this repo, run by open-pr before a PR and by cut-release before a cut.
.DESCRIPTION
    Minimal on purpose -- the repo holds no app code yet. Checks:
      1. every tracked *.ps1 parses without errors;
      2. every tracked *.ps1 is pure ASCII (Windows PowerShell 5.1 reads a BOM-less script as ANSI);
      3. .claude/settings.json is valid JSON.
    Exit 0 when clean, 1 on any error. Extend it as the app layer arrives.
    Pure ASCII (repo convention for .ps1).
#>

$ErrorActionPreference = 'Stop'
$repoRoot = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
$errors = 0

$scripts = @(git -C $repoRoot ls-files -- '*.ps1')
foreach ($rel in $scripts) {
    $path = Join-Path $repoRoot $rel
    $tokens = $null; $parseErrors = $null
    [void][System.Management.Automation.Language.Parser]::ParseFile($path, [ref]$tokens, [ref]$parseErrors)
    foreach ($e in $parseErrors) {
        Write-Host "[ERROR] ${rel}:$($e.Extent.StartLineNumber) -- $($e.Message)"
        $errors++
    }
    $bytes = [System.IO.File]::ReadAllBytes($path)
    if (@($bytes | Where-Object { $_ -gt 127 }).Count -gt 0) {
        Write-Host "[ERROR] $rel -- contains non-ASCII bytes"
        $errors++
    }
}

$settings = Join-Path $repoRoot '.claude/settings.json'
if (Test-Path -LiteralPath $settings) {
    try { [void](Get-Content -LiteralPath $settings -Raw | ConvertFrom-Json) }
    catch { Write-Host "[ERROR] .claude/settings.json -- not valid JSON: $($_.Exception.Message)"; $errors++ }
}

Write-Host "lint: $($scripts.Count) script(s) checked, $errors error(s)."
if ($errors -gt 0) { exit 1 }
exit 0
