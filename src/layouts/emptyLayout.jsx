import React from 'react';

function EmptyLayout(props) {
  return (
    <div>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            {props.children}
        </div>
    </div>
  );
}

export default EmptyLayout;
