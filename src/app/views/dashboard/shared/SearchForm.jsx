import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setSearchTerm(inputValue);
        onSearch(inputValue); // 触发搜索回调
    };

    return (
        <div>
            <input
                type="text"
                placeholder="輸入課程名稱"
                value={searchTerm}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default SearchForm;
