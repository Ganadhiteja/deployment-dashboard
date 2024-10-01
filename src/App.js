import React, { useState } from 'react';
import { parentData } from './data'; 
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import './App.css'; 

function App() {
  const [expandedRows, setExpandedRows] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: 'deploymentId', direction: 'ascending' });

  const toggleRow = (id) => {
    setExpandedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const sortedData = [...parentData].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Deployment Dashboard</h1>

      
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '10px' }}>Name</th>
            <th
              style={{ textAlign: 'left', padding: '10px', cursor: 'pointer' }}
              onClick={() => requestSort('deploymentId')}
            >
              Deployment ID {sortConfig.key === 'deploymentId' ? (sortConfig.direction === 'ascending' ? '🔼' : '🔽') : ''}
            </th>
            <th style={{ textAlign: 'left', padding: '10px' }}>Status</th>
            <th style={{ textAlign: 'left', padding: '10px' }}>Details</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((parent) => (
            <React.Fragment key={parent.id}>
              <tr>
                <td style={{ padding: '10px', verticalAlign: 'middle' }}>
                  {parent.subData.length > 0 && (
                    <span onClick={() => toggleRow(parent.id)} style={{ cursor: 'pointer', marginRight: '5px' }}>
                      {expandedRows.includes(parent.id) ? (
                        <FaChevronDown />
                      ) : (
                        <FaChevronRight />
                      )}
                    </span>
                  )}
                  {parent.name}
                </td>
                <td style={{ padding: '10px', verticalAlign: 'middle' }}>{parent.deploymentId}</td>
                <td style={{ padding: '10px', verticalAlign: 'middle' }}>{parent.status}</td>
                <td style={{ padding: '10px', verticalAlign: 'middle' }}>{parent.details}</td>
              </tr>
              {expandedRows.includes(parent.id) && parent.subData.length > 0 && (
                <tr style={{ backgroundColor: '#f9f9f9' }}>
                  <td colSpan={4} style={{ padding: '10px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr>
                          <th style={{ textAlign: 'left', padding: '10px' }}>Sub-Name</th>
                          <th style={{ textAlign: 'left', padding: '10px' }}>Sub-Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {parent.subData.map((sub) => (
                          <tr key={sub.id}>
                            <td style={{ padding: '10px' }}>{sub.name}</td>
                            <td style={{ padding: '10px' }}>{sub.status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
