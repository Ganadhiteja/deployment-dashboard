export const parentData = [
    {
      id: 1,
      name: 'Deployment 1',
      deploymentId: 'DPT-001', 
      status: 'Active',
      details: 'Details about deployment 1',
      subData: [
        { id: 'sub-1', name: 'Sub-Deployment 1', status: 'Active' },
        { id: 'sub-2', name: 'Sub-Deployment 2', status: 'Inactive' },
      ],
    },
    {
      id: 2,
      name: 'Deployment 2',
      deploymentId: 'DPT-002', 
      status: 'Inactive',
      details: 'Details about deployment 2',
      subData: [],
    },
    

    {
        id: 3,
        name: 'Deployment 2',
        deploymentId: 'DPT-003', 
        status: 'Active',
        details: 'Details about deployment 3',
        subData: [ { id: 'sub-1', name: 'Sub-Deployment 1', status: 'Active' },
            { id: 'sub-2', name: 'Sub-Deployment 2', status: 'Active' },],
      },
      {
        id: 4,
        name: 'Deployment 4',
        deploymentId: 'DPT-004', 
        status: 'Inactive',
        details: 'Details about deployment 4',
        subData: [ { id: 'sub-1', name: 'Sub-Deployment 1', status: 'InActive' },
            { id: 'sub-2', name: 'Sub-Deployment 2', status: 'Inactive' },],
      },
      {
        id: 5,
        name: 'Deployment 5',
        deploymentId: 'DPT-005', 
        status: 'Inactive',
        details: 'Details about deployment 5',
        subData: [],
      },
  ];
  