import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

import "./preview-component.style.scss";

const CollectionPreview = ({ title, items }) => (
  <div>
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
