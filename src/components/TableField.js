import React from 'react';

const TableField = ({ fieldName, settingsField, removeBook, editBook }) => {

    return(
        <div className="tableField">
            {fieldName}
            {settingsField &&
                <div className="settingsIcons">
                    <i onClick={editBook} className="far fa-edit"></i>
                    <i onClick={removeBook} className="far fa-trash-alt"></i>
                </div>
            }
        </div>
    );
};

export default TableField;