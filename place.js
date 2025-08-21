
    function addToCart(place, price) {
      alert(`${place} added to your travel plan! 🚌 Estimated cost: ₹${price}`);
    }

    function sharePlace() { 
      if (navigator.share) {
        navigator.share({
          url: window.location.href //using current window location
        });
      } else {
        alert("Sharing not supported on this device.");
      }
    }
