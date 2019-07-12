
const styles = {
  overlayStyles: {
    position: 'fixed',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
    zIndex: '99',
    backgroundColor: 'rgba(0,0,0,0.6)',
    transitionProperty: 'all',
    transitionTimingFunction: 'ease',
    display: 'none',
  },
  dialogStyles: {
    position: 'fixed',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
    minHeight: '400px',
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: '4px',
    color: '#fff',
    zIndex: '100',
    padding: '15px',
    boxShadow: '0px 0px 4px rgba(0,0,0,.14),0px 4px 8px rgba(0,0,0,.28)',
    boxSizing: 'border-box',
  },
  animationBase: {
    transform: 'scale(0)',
    transitionProperty: 'transform',
    transitionTimingFunction: 'ease',
  },
  animationOpen: {
    transform: 'scale(1)',
    transitionProperty: 'transform',
    transitionTimingFunction: 'ease',
  },
  title: {
    marginTop: '0px',
  },
  closeButtonStyle: {
    cursor: 'pointer',
    position: 'absolute',
    fontSize: '1.8em',
    right: '10px',
    top: '0px',
  },
};

export default styles;
