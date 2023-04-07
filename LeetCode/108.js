var sortedArrayToBST = function(nums){
    if(nums.length == 0) return null;
    //build the actual tree
    let build = (l= 0, r = nums.length) =>{
        if (r <= l) return null;
        //build current node
        let m = Math.trunc((l + r) / 2);
        let node = new TreeNode(nums[m], null, null);
        //divide & conquer
        [node.left, node.right] = [build(l,m), build(m+1, r)];
        return node;
    }
    return build();
};