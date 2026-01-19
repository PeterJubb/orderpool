$files = Get-ChildItem -Path . -Filter *.html

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # Replace href="/..." with href="..." (removing leading slash)
    # We use a negative lookahead for / to avoid matching // (protocol relative)
    # Pattern: href="/(?!/)(.*?)" -> href="$1"
    
    $content = $content -replace 'href="/(?!/)(.*?)"', 'href="$1"'
    
    # Also handle src="/..." for images if they exist with leading slash
    $content = $content -replace 'src="/(?!/)(.*?)"', 'src="$1"'
    
    Set-Content -Path $file.FullName -Value $content
    Write-Host "Processed $($file.Name)"
}
