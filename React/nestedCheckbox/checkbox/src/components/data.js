const data = [
  {
    id: "p1",
    children: [
      {
        id: "p1-c1",
        children: [
          { id: "p1-c1-c1" },
          {
            id: "p1-c1-c2",
            children: [
              { id: "p1-c1-c2-c1" },
              {
                id: "p1-c1-c2-c2",
                children: [
                  { id: "p1-c1-c2-c2-c1" },
                  { id: "p1-c1-c2-c2-c2" },
                ],
              },
              { id: "p1-c1-c2-c3" },
            ],
          },
        ],
      },
      { id: "p1-c2" },
      { id: "p1-c3" },
    ],
  },
  {
    id: "p2",
    children: [{ id: "p2-c1" }, { id: "p2-c2" }],
  },
  {
    id: "p3",
    children: [{ id: "p3-c1" }],
  },
  { id: "p4" },
];
export default data