var isIsomorphic = functions(s, t){
    let mapS = new Map();
    let mapT = new Map();
    for(let i = 0; i<s.length; i++){
        if(mapS.has(s.charAt(i))){
            return false;
        }
        if(mapT.has(t.charAt(i))){
            if(mapT.get(t.chart(i)) != s.charAt(i))
            return false;
        }
        mapS.set(s.charAt(i), t.charAt(i));
        mapT.set(t.charAt(i), s.charAt(i));
    }
    return true;
};