import { useEffect, useState } from 'react';

const useAvailableHeight = (classNames = [], spacingClassNames = []) => {
  const [availableHeight, setAvailableHeight] = useState(0);

  const getElementHeight = (el) => {
    const rect = el.getBoundingClientRect();
    const styles = window.getComputedStyle(el);

    // Get the margin-top, margin-bottom, padding-top, and padding-bottom from computed styles
    const marginTop = parseFloat(styles.marginTop);
    const marginBottom = parseFloat(styles.marginBottom);
    const paddingTop = parseFloat(styles.paddingTop);
    const paddingBottom = parseFloat(styles.paddingBottom);

    // Return total height (including margins and paddings)
    return rect.height + marginTop + marginBottom + paddingTop + paddingBottom;
  };

  useEffect(() => {
    const updateHeight = () => {
      // Calculate the total height of all main components
      const componentsHeight = classNames
        .map((className) => document.querySelector(`.${className}`))
        .reduce((acc, el) => {
          if (el) {
            return acc + getElementHeight(el);
          }
          return acc;
        }, 0);

      // Calculate the total height of all spacing components (only margins and paddings)
      const spacingHeight = spacingClassNames
        .map((className) => document.querySelector(`.${className}`))
        .reduce((acc, el) => {
          if (el) {
            const styles = window.getComputedStyle(el);
            const marginTop = parseFloat(styles.marginTop);
            const marginBottom = parseFloat(styles.marginBottom);
            const paddingTop = parseFloat(styles.paddingTop);
            const paddingBottom = parseFloat(styles.paddingBottom);

            // Only add margins and paddings for spacing components
            return acc + marginTop + marginBottom + paddingTop + paddingBottom;
          }
          return acc;
        }, 0);

      // Calculate the available height by subtracting main and spacing heights from the viewport height
      const availableHeight =
        window.innerHeight - componentsHeight - spacingHeight;
      setAvailableHeight(availableHeight);
    };

    // Initial height calculation
    updateHeight();

    // Update height on window resize
    window.addEventListener('resize', updateHeight);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, [classNames, spacingClassNames]);

  return availableHeight;
};

export default useAvailableHeight;
