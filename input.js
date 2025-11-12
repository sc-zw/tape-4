
function step(feed,f) {
    for (const [k,v] of f) if ( feed.indexOf(k) > -1 ) {feed = feed.replace(k,v); return feed;}
    return feed;
}
function accept_rule() {
    const new_f = new Map;
    let p;
    let s = document.getElementById(`prog0`).value.replaceAll(' ','');
    if ( s == '' ) return new_f;
    // s = s.replaceAll(/0123456789/g,'');
    // s = s.replace(/0/g,'\u2080');
    // s = s.replace(/1/g,'\u2081');
    // s = s.replace(/2/g,'\u2082');
    // s = s.replace(/3/g,'\u2083');
    // s = s.replace(/4/g,'\u2084');
    // s = s.replace(/5/g,'\u2085');
    // s = s.replace(/6/g,'\u2086');
    // s = s.replace(/7/g,'\u2087');
    // s = s.replace(/8/g,'\u2088');
    // s = s.replace(/9/g,'\u2089');
    if (s[s.length - 1] == '\n') s = s.slice(0, -1);
    t = s.split("\n")
    for (let i of t) {
        p = i.split('>');
        new_f.set(p[0], p[1]);
    } 
    //console.log(new_f);
    return new_f;
}
function display_rule() {
    let a = [];
    for (const [k,v] of f) a.push(`${k}  >  ${v}`);
    s = a.join('\n');
    document.getElementById("prog0").value = s;
}
function calculate() {
    document.getElementById("hist").value = '';
    let tape_history = [];
    let th;
    f = accept_rule();
    display_rule();
    tape = document.getElementById("tape").value
    //tape_history[0] = tape;
    let old_t = '';
    let i = 0;
    let s = '';
    while (true) {
        tape_history.push(tape);
        s += tape + '\n';
        document.getElementById("hist").value += tape + '\n';
        old_t = tape;
        tape = step(tape,f);
        if (i > run_limit) break;
        if (tape == old_t) break;
        
    }
    console.log(tape_history);
    return s;
}