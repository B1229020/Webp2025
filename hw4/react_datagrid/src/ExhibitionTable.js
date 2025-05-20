import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './App.css';

const ExhibitionTable = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [page, setPage] = useState(0); // 這裡新增管理 pageSize 的狀態

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: '名稱', width: 250 },
    { field: 'location', headerName: '地點', width: 250 },
    { field: 'price', headerName: '票價', width: 150 },
  ];

  useEffect(() => {
    fetch('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6')
      .then(res => res.json())
      .then(json => {
        const cleaned = json.map((item, index) => ({
          id: index + 1,
          title: item.title,
          location: item.showInfo[0]?.location || '',
          price: item.showInfo[0]?.price || '',
        }));
        setData(cleaned);
        setFilteredData(cleaned);
      });
  }, []);

  const handleSearch = (e) => {
    const kw = e.target.value.toLowerCase();
    setKeyword(kw);
    const result = data.filter(item => item.title.toLowerCase().includes(kw));
    setFilteredData(result);
  };

  return (
    <div>
      <h1>景點觀光展覽資訊</h1>
      <input
        type="text"
        placeholder="搜尋名稱"
        value={keyword}
        onChange={handleSearch}
        style={{ marginBottom: '10px' }}
      />
      <div className="custom-datagrid" style={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={filteredData}
          columns={columns}
          paginationModel ={{pageSize:10,page}}
          onPaginationModelChange={(model) => setPage(model.page)}
          rowsPerPageOptions={[10]}  // 這邊可以多放幾個選項，像 [10, 25, 50]
          disableRowSelectionOnClick
        />
      </div>
    </div>
  );
};

export default ExhibitionTable;
