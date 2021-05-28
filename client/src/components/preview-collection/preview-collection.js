import CollectionItem from '../collection-item/collection-item';
import {
  CollectionPreview,
  CollectionPreviewContainer,
  CollectionPreviewTitle,
} from './preview-collection.style';

const PreviewCollection = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <CollectionPreviewTitle>{title.toUpperCase()}</CollectionPreviewTitle>
      <CollectionPreview>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => {
            return (
              <CollectionItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
              />
            );
          })}
      </CollectionPreview>
    </CollectionPreviewContainer>
  );
};

export default PreviewCollection;
