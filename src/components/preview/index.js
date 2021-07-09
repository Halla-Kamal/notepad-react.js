import React from 'react';

// وظيفة هذا المكون استقبال ما يأتيه من مكونات بداخله
const Preview = (props) => (
    <div className="preview-section" >
        {props.children}
    </div>
);

export default Preview;