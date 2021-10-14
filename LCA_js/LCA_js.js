
function findLCA(root, n1, n2){
    path1 = []
    path2 = []
    return findLCAInternal(root, n1, n2);
}

function findLCAInternal(root, n1, n2){
    if(!findPath(root, n1, path1) || !findPath(root, n2, path2)){
        return -1;
    }

    let i;
    for (i =0; i<path1.length && i <path2.length;i++){
        if(path1[i]!= path2[i]){
            break;
        }
    }
    return path1[i-1];
}

function findPath(root, n, path){

    if(root==null){
        return false;
    }
    path.push(root.key);


    if(root.key == n){
        return true;
    }
    if(root.left != null && findPath(root.left,n,path)){
        return true;
    }
    if(root.right != null && findPath(root.right,n,path)){
        return true;
    }

    path.pop()

    return false;

}
module.exports = findLCA