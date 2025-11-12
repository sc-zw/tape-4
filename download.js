
function download_string(s) {
    let file = new File([s], 'tape_machine.txt', { type: 'text/plain',});
    const link = document.createElement('a')
    const url = URL.createObjectURL(file)
  
    link.href = url
    link.download = file.name
    document.body.appendChild(link)
    link.click()
  
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
}

function print() {
    f = accept_rule();
    s = "";
    for (const [k,v] of f) {
        s += k + " > " + v + "\n";
    }
    s += '\n\n';
    s += calculate();
    download_string(s);
}