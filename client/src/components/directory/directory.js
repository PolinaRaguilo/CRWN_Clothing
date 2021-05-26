import { connect } from 'react-redux';
import MenuItem from '../menu-item/menu-item';
import './directory.scss';
import { selectDirectorySections } from '../../redux/directory/directory-selectors';

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map((item) => {
        return (
          <MenuItem
            key={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
            size={item.size}
            linkUrl={item.linkUrl}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sections: selectDirectorySections(state),
  };
};

export default connect(mapStateToProps, null)(Directory);
