export async function set(key:string,value:any){
    localStorage.setItem(key,JSON.stringify(value));
}

export async function get(key:string){
    return JSON.parse(localStorage.getItem(key) || '{}');
}

export async function remove(key:string){
    localStorage.removeItem(key);
}

