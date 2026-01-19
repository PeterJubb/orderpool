$files = Get-ChildItem -Path . -Filter *.html

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # Replace root link
    $content = $content -replace 'href="/"', 'href="index.html"'
    
    # Replace internal links starting with /
    # This regex looks for href="/..." where ... is not nothing and doesn't contain / (flat structure) 
    # and isn't a likely extension (though we are adding one).
    # We want to catch href="/pricing" but not href="/style.css" (though those usually aren't href in <a>)
    # Actually, <link rel="stylesheet" href="/styles.css"> matches too!
    # We must restrict to valid pages or check context. 
    # Simpler: All the pages identified in list_dir end with .html or are images. 
    # The links in the files are likely purely navigational.
    # Let's target href="/[keyword]" and convert to href="[keyword].html".
    # We'll ignore common assets like .css, .png, .jpg if referenced with leading /.
    
    # Regex: href="/([^".]+)" -> href="$1.html"
    # This avoids matching things that already have a dot (like .css, .png)
    $content = $content -replace 'href="/([^".]+)"', 'href="$1.html"'
    
    Set-Content -Path $file.FullName -Value $content
    Write-Host "Processed $($file.Name)"
}
