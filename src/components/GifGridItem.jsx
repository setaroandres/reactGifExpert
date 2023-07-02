import propTypes from 'prop-types';

export const GifGridItem = ({title, url}) => {
  return (
            <div className="card">
                <img src={url} alt={title} />
                <p>{title}</p>
            </div>
  )
}

GifGridItem.propTypes = {
  title: propTypes.string.isRequired, 
  url  : propTypes.string.isRequired,
}