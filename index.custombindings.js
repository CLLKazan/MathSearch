ko.bindingHandlers.typeahead =
  {
  update: function(elElement, fncValueAccessor)
    {
    var arData = fncValueAccessor ();
    if (typeof (arData) == "function") arData = arData ();
    
    if (arData.length == 0) return;
    $(elElement).typeahead ({source: arData});
    }
  }
  
ko.bindingHandlers.loading =
  {
  update: function(elElement, fncValueAccessor)
    {
    var isLoading = fncValueAccessor ();
    if (typeof (isLoading) == "function") isLoading = isLoading ();
    
    if (isLoading)
      $(elElement).button("loading");
    else
      $(elElement).button("reset");
    }
  }
  
ko.bindingHandlers.modalOpened =
  {
  update: function(elElement, fncValueAccessor)
    {
    var isOpened = fncValueAccessor ();
    if (typeof (isOpened) == "function") isOpened = isOpened ();
    
    if (isOpened)
      $(elElement).modal("show");
    else
      $(elElement).modal("hide");
    }
  }
  
ko.bindingHandlers.slideVisible =
  {
  init: function(elElement, fncValueAccessor)
    {
    var isVisible = fncValueAccessor ();
    if (typeof (isVisible) == "function") isVisible = isVisible ();
    
    $(elElement).toggle(isVisible);
    },
  update: function(elElement, fncValueAccessor)
    {
    var isVisible = fncValueAccessor ();
    if (typeof (isVisible) == "function") isVisible = isVisible ();
    
    if (isVisible && !$(elElement).is(':visible'))
      $(elElement).slideDown();
    else if ($(elElement).is(':visible'))
      $(elElement).slideUp();
    }
  }
  
ko.bindingHandlers.visibility =
  {
  update: function(elElement, fncValueAccessor)
    {
    var isVisible = fncValueAccessor ();
    if (typeof (isVisible) == "function") isVisible = isVisible ();
    
    if (isVisible)
      $(elElement).css({visibility: "visible"});
    else
      $(elElement).css({visibility: "hidden"});
    }
  }