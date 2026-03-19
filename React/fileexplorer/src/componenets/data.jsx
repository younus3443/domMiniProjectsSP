// export const explorer = {
//   name: "root",
//   isFolder: true,
//   items: [
//     {
//       name: "public",
//       isFolder: true,
//       items: [
//         {
//           name: "index.html",
//           isFolder: false
//         }
//       ]
//     },
//     {
//       name: "src",
//       isFolder: true,
//       items: [
//         {
//           name: "App.js",
//           isFolder: false
//         },
//         {
//           name: "components",
//           isFolder: true,
//           items: [
//             {
//               name: "FileExplorer.js",
//               isFolder: false
//             }
//           ]
//         }
//       ]
//     }
//   ]
// };

const explorer={
    name:"root",
    isFolder:true,
    items:[
        {
            name:"public",
            isFolder:true,
            items:[
                {name:"images",
                isFolder:true,
                items:[
                    {name:"cover.png",
                    isFolder:false
                    },
                    {
                        name:"icons",
                        isFolder:true,
                        items:[
                            {name:"arrow.svg",
                            isFolder:false
                            }
                        ]
                    },
                ]
                },
                {
                    name:"Public_nested_file",
                    isFolder:false

                }
            ]
        },
        {
            name:"src",
            isFolder:true,
            items:[
                {name:"componentes",
                isFolder:true,
                items:[
                    {name:"index.js",
                    isFolder:false,},
                    {name:"index.html",
                    isFolder:false,},
                    {name:"index.css",
                    isFolder:false,}
                ]
            },
            {
                name:"main.jsx",
                isFolder:false
            },
            {
                name:"app.jsx",
                isFolder:false
            },{
                name:"app.module..css",
                isFolder:false
            }
            ]
        },{
            name:"dist",
            isFolder:true,
            items:[
                {name:"index.js",
                isFolder:false,},
                {name:"index.html",
                isFolder:false,},
                {name:"index.css",
                isFolder:false,}
            ]
        },
        {name:"package.json",
        isFolder:false
        },
        {name:"package-lock.json",
            isFolder:false
        }
    ]
}

export default explorer