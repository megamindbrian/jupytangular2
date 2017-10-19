var execSync = require('child_process').execSync;

var gitTree = (project) => {
    process.chdir(project)
    var branches = execSync('git branch --list --all ').toString()
        .trim().split(/\s*\n\s*\**\s*/ig)
        .map(b => b.replace('remotes/', '').trim());

    // reverse git so we can add merges to the "graph" after the branch tree is constructed
    var branch = execSync('git log --pretty=format:"%ct %d %h %p" '
        + '--reverse --branches --tags ').toString().split(/\s*\n\s*/ig);
    var all = []; //execSync('git log --pretty=format:"%h %p" --reverse --all').toString().split(/\s*\n\s*/ig);

    var nodeTree = [];
    var edges = [];
    branch.forEach(b => {
        var commits = ((/[0-9]+\s+\(.*?\)\s*(.+)/ig).exec(b)
            || (/[0-9]+\s+(.+)/ig).exec(b) || [b, b.trim()])[1].trim().split(/\s+/ig);
        commits.forEach(r => {
            if (nodeTree.filter(d => d.name == r).length == 0) {
                nodeTree[nodeTree.length] = {
                    name: r,
                    index: nodeTree.length,
                    branch: ((/[0-9]+\s+\((.*?)\)/ig).exec(b) || [b, ''])[1],
                    time: (/([0-9]+)\s+/ig).exec(b)[1]
                }
            }
        });
        // don't include merges in tree
        if (commits.length == 3) {
            commits = [commits[0], commits[2]];
        }
        if (commits.length == 2) {
            edges = edges.concat(commits.slice(1)
            // check all existing sources to test for merge
                .map((c, i) => {
                    return {source: commits[i], target: c}; // -1 because of slice(1)
                }))
        }
    });

    var nodeMap = {};
    nodeTree.forEach(function (x) {
        if (typeof x.size == 'undefined') {
            x.size = 1;
        }
        nodeMap[x.name] = x;
    });

    edges.forEach(function (x) {
        if (typeof nodeMap[x.target].children == 'undefined') {
            nodeMap[x.target].children = [];
        }
        nodeMap[x.source].parent = nodeMap[x.target];
        nodeMap[x.target].children.push(nodeMap[x.source]);
        // return { parent: nodeMap[x.target], source: nodeMap[x.source], target: nodeMap[x.target] };
    });
    edges.reverse().forEach(function (x) {
        if (typeof nodeMap[x.source].branch != 'undefined' && nodeMap[x.source].branch != ''
            && typeof nodeMap[x.target].branch == 'undefined' || nodeMap[x.target].branch == '') {
            nodeMap[x.target].branch = nodeMap[x.source].branch;
        }
    });
    return nodeTree;
}
module.exports = gitTree;
gitTree;
