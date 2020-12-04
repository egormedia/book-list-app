import React from 'react';

const TableField = ({ fieldName, settingsField }) => {

    return(
        <div className="tableField">
            {fieldName}
            {settingsField &&
                <div className="settingsIcons">
                    <i className="far fa-edit"></i>
                    <i className="far fa-trash-alt"></i>
                </div>
            }
        </div>
    );
};

export default TableField;