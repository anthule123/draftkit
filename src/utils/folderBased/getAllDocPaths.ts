
import fs from "fs";

type Node = {
    name: string,
    path: string[],
    dir: string,
}
export async function getAllDocPaths(dir: string){
    const paths : string[][] = []
    const root: Node = {
            name: "",
            path: [],
            dir: dir
        };
    const myStack = [root];
    while(myStack.length>0){
            const v = myStack.pop()
            const thisDir = v!.dir;
            const entries = fs.readdirSync(thisDir, {
                withFileTypes: true, 
                recursive: false
            }) 
            for(const entry of entries){
                const nodeName = entry.name.replace
                (/\.mdx$/,"");
                // const slugName = nodeName.replace(/\s+/g, '-'); // thay tất cả khoảng trắng thành '-'
                if(nodeName==='lib' && v!.name==='')
                    continue;
                const newDir = thisDir + '/' + nodeName;
                const isMdxFile = entry.name.endsWith('.mdx') && entry.isFile();
                const newPath = [...v!.path, nodeName];
                const thisNode : Node = {
                    name: nodeName,
                    path: newPath,
                    dir: newDir,
                } 
                if(entry.isDirectory()){
                    myStack.push(thisNode);
                }
                if(isMdxFile){
                    paths.push(newPath)    
                }
            }
    }
    return paths 
}