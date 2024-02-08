// import components styles
import { IconStyles } from './Icon.styles';


function Icon ({ src, maxWidth, width, height, marginLeft, position, top, bottom, left, right }) {
  return (
    <IconStyles src={src} maxWidth={maxWidth} width={width} height={height} marginLeft={marginLeft} position={position} top={top} bottom={bottom} left={left} right={right} />
  );
}

export default Icon;