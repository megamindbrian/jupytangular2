%%
dot

digraph
apply
{
    label = 'Angular 2 Architecture'
    rankdir = TB;
    fontname = Helvetica
    node[fontname = Helvetica, width = 1.8, height = 0.8]
    edge[fontname = Helvetica, fontsize = 12, fontcolor = blue, labeldistance = 1.8]

    subgraph
    cluster_browser
    {
        label = 'Web Browser'

        socket[shape = 'box', label = 'SocketJS'];
        xhr[shape = 'box', label = 'XHR'];

        subgraph
        cluster_angular_component
        {
            label = 'Angular Components'

            core[shape = 'box', label = 'Core'];
            router[shape = 'box', label = 'Router'];
            rxjs[shape = 'box', label = 'RxJs'];

            cli[shape = 'box', label = 'CLI'];
            less[shape = 'box', label = 'Less/SASS'];
            material[shape = 'box', label = 'Material'];

            {
                rank = same
                core
                router
                rxjs
            }
        ->
            {
                rank = same
                cli
                less
                material
            }
            [style = invis]
        }

        edge[style = 'invisible', dir = 'none'];
        router -> material -> socket -> xhr;
    }

    subgraph
    cluster_angular_tools
    {
        label = 'Developer Tools'
        rank = same;

        teamcity[shape = 'box', label = 'TeamCity'];
        lint[shape = 'box', label = 'Lint'];
        webpack[shape = 'box', label = 'Webpack'];

        edge[style = 'invisible', dir = 'none'];
        teamcity -> lint -> webpack
    }

    webpack -> socket [minlen = 3]

    subgraph
    cluster_aws
    {
        label = 'AWS'

        subgraph
        cluster_vm
        {
            label = 'Hyper-V / Docker'
            windows[shape = 'box', label = 'Windows'];

            subgraph
            cluster_server
            {
                label = 'Server Stack'

                csharp[shape = 'box', label = 'C#'];
                swagger[shape = 'box', label = 'Swagger'];
                identity[shape = 'box', label = 'Identity\nServer 3'];

                subgraph
                cluster_server_tools
                {
                    label = 'Developer Tools'
                    blueprint[shape = 'box', label = 'Blueprint'];
                    msbuild[shape = 'box', label = 'MSBuild'];
                }

                edge[style = 'invisible', dir = 'none'];
                csharp -> swagger -> identity
            }

            xhr -> identity [minlen = 3]
        }
    }
}