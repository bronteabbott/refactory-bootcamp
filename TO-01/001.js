// xId: plato.js,v 1.57 2013-06-26 04:18:23 xzhuang Exp $
//
// COPYRIGHT NOTICE:
//      Copyright 2006 NSW Department of Education and Training
//
//
// HISTORY
//    xLog: plato.js,v $
//    Revision 1.56  2012-05-23 01:22:58  smandapati
//     prompt for printing in landscape
//
//    Revision 1.55  2011-07-13 00:14:31  obeimnet1
//    updated showLookupAndPostForm - make formCommand optional
//
//    Revision 1.54  2011-06-27 02:59:37  obeimnet1
//    merge from branch: BR_1_8_4_30052011_1410
//
//    Revision 1.53.2.1  2011-06-27 02:37:44  obeimnet1
//    added showLookupAndPostForm
//
//    Revision 1.53  2011-05-10 07:23:09  hzhou1
//    added precall function prior to calling changeFunction
//
//    Revision 1.52  2011-03-04 03:50:07  pwhitaker
//    commented out code that was causing double submits in Internet explorer
//
//    Revision 1.51  2011-03-03 00:01:18  pwhitaker
//    Merge branch 1.6b to 1.8
//
//    Revision 1.50  2010-12-07 03:15:29  sbagade1
//    merging files from 1.7.1 to 1.7.0 head
//
//    Revision 1.49.28.3  2010-11-22 05:34:36  rmingazov
//    comment management look and feel
//
//    Revision 1.49.28.2  2010-11-17 05:54:51  rmingazov
//    serial no field to accept Enter during scan
//
//    Revision 1.49.28.1  2010-11-01 21:26:13  wfrost
//    Inline editing stuff
//
//    Revision 1.49.24.1  2010-11-04 00:24:34  akelly7
//    Allow parent page to define popup close function, also pass through popup id for logic use in close callback.
//
//    Revision 1.49  2009/02/18 03:39:30  pwhitaker
//    added counter max visual indicator to updateCounter
//
//    Revision 1.48  2008/11/24 20:57:49  amcnamara5
//    Add temporary buttonCloseLookup - to invoke callback function in either window or window.parent context
//
//    Revision 1.47  2008/10/09 04:14:34  rvoto
//    remove alert
//
//    Revision 1.46  2008/05/19 23:46:59  smandapati
//    updated  add new function
//
//    Revision 1.45  2008/04/29 08:17:10  pwhitaker
//    added tabSelected for plato tab tag
//
//    Revision 1.44  2008/04/22 04:27:54  jwang17
//    SEP-1052 Cannot view Registration details page after closing Place Management screen in Registration history Little button
//
//    Revision 1.43  2007/12/18 09:05:02  fdaspromonte
//    Implement optional sounds
//
//    Revision 1.42  2007/12/18 07:20:34  fdaspromonte
//    Implement slider
//
//    Revision 1.41  2007/12/18 03:45:28  fdaspromonte
//    Added SliderTag based on Yahoo UI Slider
//
//    Revision 1.40  2007/11/28 00:32:41  fdaspromonte
//    Merge from branch
//
//    Revision 1.39  2007/11/27 21:36:51  amcnamara5
//    Added onpopupCloseCallback  - call
//    to allow javascript to be called on closing of a popup
//
//    Revision 1.38  2007/10/30 22:43:28  rvoto
//    SEP 478
//
//    Revision 1.37.2.2  2007/10/30 23:14:45  rvoto
//    SEP 478
//
//    Revision 1.37.2.1  2007/10/30 22:41:03  rvoto
//    SEP 478
//
//    Revision 1.37  2007/09/27 05:51:27  rvoto
//    rollback2
//
//    Revision 1.36  2007/09/27 01:07:22  rvoto
//    more flexiblity added to changeFunction
//
//    Revision 1.35  2007/09/27 00:30:27  fdaspromonte
//    Fix menu slider
//
//    Revision 1.34  2007/09/21 02:24:30  fyang1
//    fixed a javascript error in IE 6
//
//    Revision 1.33  2007/09/20 01:06:05  fyang1
//    stretchy popup
//
//    Revision 1.32  2007/09/17 10:53:03  fyang1
//    work on resizable popup
//
//    Revision 1.31  2007/09/16 07:48:06  fyang1
//    popup change
//
//    Revision 1.30  2007/09/15 10:31:41  fyang1
//    no message
//
//    Revision 1.29  2007/08/30 08:34:19  jwang17
//    link image with pop up
//
//    Revision 1.28  2007/08/24 06:49:51  fdaspromonte
//    Change secret key to ctrl+alt+space
//
//    Revision 1.27  2007/08/22 09:31:20  fdaspromonte
//    Default popups to  blank.html instead of javascript:false
//
//    Revision 1.26  2007/08/21 05:11:04  fdaspromonte
//    Allow tabs to pass through on input mask
//
//    Revision 1.25  2007/08/17 08:40:56  fdaspromonte
//    Fix input mask
//
//    Revision 1.24  2007/08/17 08:30:03  fdaspromonte
//    Fix input mask
//
//    Revision 1.22  2007/08/17 06:50:51  fdaspromonte
//    Fix input mask
//
//    Revision 1.21  2007/07/16 07:14:17  fyang1
//    fixed a bug in hidePleaseWait function
//
//    Revision 1.20  2007/06/23 07:05:25  fdaspromonte
//    Move javascript into plato.js
//
//    Revision 1.19  2007/06/13 04:27:11  fdaspromonte
//    Make pleaseWait display:none to reduce height of page
//
//    Revision 1.18  2007/06/13 03:54:38  fdaspromonte
//    Move SessionTimeoutController to plato.js
//
//    Revision 1.17  2007/06/12 15:39:00  fdaspromonte
//    Show mask when displaying pleaseWait
//
//    Revision 1.16  2007/06/03 09:18:04  fdaspromonte
//    Remove disabling of default button
//
//    Revision 1.15  2007/05/10 04:59:40  rvoto
//    changeFunction for top menu functionality
//
//    Revision 1.14  2007/05/10 03:57:13  fyang1
//    fixed a bug in showPleaseWait
//
//    Revision 1.13  2007/05/07 06:03:48  rvoto
//    top bar Functionality
//
//    Revision 1.12  2007/04/23 03:21:58  elui
//    registration chgs
//
//    Revision 1.11  2007/04/18 07:35:23  fdaspromonte
//    Bugfix: When setting command create a hidden input field if it doesn't exist
//
//    Revision 1.10  2007/04/18 00:03:05  rvoto
//    set command
//
//    Revision 1.9  2007/04/17 07:44:17  fdaspromonte
//    Automatically create command element if it doesn't exist
//
//    Revision 1.8  2007/04/10 00:13:44  fyang1
//    reverse back to use iframe to show please wait guy as Frank did to
//    work around a bloody CSS bug in IE crap
//
//    Revision 1.7  2007/04/02 00:47:45  fyang1
//    pleasewait show properly in IE
//
//    Revision 1.6  2007/03/30 04:29:35  fyang1
//    modified showPleaseWait a bit
//
//    Revision 1.5  2007/03/30 03:48:00  fyang1
//    moved showPleaseWait(form) function from layout.jsp into plato.js
//
//    Revision 1.4  2007/03/21 06:27:34  fdaspromonte
//    Rename yahoo panel to current standard
//
//    Revision 1.3  2007/03/14 22:30:58  fyang1
//    modified the first parameter of updateCount function
//    as DOM element type instead of string
//
//    Revision 1.2  2007/03/12 00:03:38  fdaspromonte
//    Add input mask
//
//    Revision 1.1  2007/02/26 09:17:46  fdaspromonte
//    no message
//
//
//

function changeFunction(pCallerId, pFunctionSelected) {
    return changeFunction(pCallerId, pFunctionSelected, null, null);
}
/**
* //HV
* Allows navigation pages in little button. 
* If the user is modifying data any ACTION implementing a Java method named 
* 'changeFunction' will get the info previously process here (Form data basically). 
* If not, the default changeFunction in RegistrationMenuAction will be used. 
* The condition for this to work is naming the html form : "toBeSavedForm"
* pCallerId Where it comes from  
* pFunctionSelected Where it goes
*/
function changeFunction(pCallerId, pFunctionSelected, initMethod, params) {
    if (window.onPreCallChangeFunction != null) {
        window.onPreCallChangeFunction();
    }

    var form = window.document.getElementById("toBeSavedForm");

    if (form != null){ //User was editing. Data needs to be saved
        setCommand('changeFunction', 'toBeSavedForm');
        
        var newFunctionSelectedInput = document.createElement('input'); 
        var idName = 'functionSelected'; 
        newFunctionSelectedInput.setAttribute('id', idName); 
        newFunctionSelectedInput.setAttribute('name',idName); 
        newFunctionSelectedInput.setAttribute('type','hidden'); 
        newFunctionSelectedInput.setAttribute('value', pFunctionSelected);
        form.appendChild(newFunctionSelectedInput);
        
        if (initMethod != null){
            var initMethodInput = document.createElement('input'); 
            idName = 'initMethod'; 
            initMethodInput.setAttribute('id', idName);
            initMethodInput.setAttribute('name',idName); 
            initMethodInput.setAttribute('type','hidden');
            initMethodInput.setAttribute('value', initMethod);
            form.appendChild(initMethodInput);
        }
        
        if (params != null){
            var paramInput = document.createElement('input'); 
            idName = 'params'; 
            paramInput.setAttribute('id', idName); 
            paramInput.setAttribute('name',idName); 
            paramInput.setAttribute('type','hidden'); 
            paramInput.setAttribute('value', params);
            form.appendChild(paramInput);  
        }
    } else { //Normal navigation
        form = window.document.getElementById("topMenuBarForm");//var form = window.document.getElementById("topMenuBarForm");
        
        var newCommandInput = document.createElement('input'); 
        var idName = 'command'; 
        newCommandInput.setAttribute('id', idName);
        newCommandInput.setAttribute('name',idName); 
        newCommandInput.setAttribute('type','hidden');
        if (initMethod != null)
            newCommandInput.setAttribute('value', initMethod);
        else
            newCommandInput.setAttribute('value', 'init');        
        form.appendChild(newCommandInput);

        if (params != null)
            form.action = pFunctionSelected + ".do?" + params;
        else
            form.action = pFunctionSelected + ".do?";
        form.functionSelected.value = pFunctionSelected;
    }
    
       
    var newCallerIdInput = document.createElement('input'); 
    idName1 = 'callerId'; 
    newCallerIdInput.setAttribute('id', idName1); 
    newCallerIdInput.setAttribute('name',idName1); 
    newCallerIdInput.setAttribute('type','hidden'); 
    newCallerIdInput.setAttribute('value', pCallerId);
    form.appendChild(newCallerIdInput);  

    //Autosaving    
    if (form.autoSaving){
        form.autoSaving.value = true;
    } else{
        var autoSavingInput = document.createElement('input'); 
        var idName = 'autoSaving'; 
        autoSavingInput.setAttribute('id', idName);
        autoSavingInput.setAttribute('name', idName); 
        autoSavingInput.setAttribute('type', 'hidden');
        autoSavingInput.setAttribute('value', true);  
        form.appendChild(autoSavingInput);  
    }
        
    form.submit();

    return false;
}

  function f_toggleSearchFunction(pAction){
    window.document.forms[0].action = pAction;
    return true;
    }


function setCommand(command, formid) {
  var form;
  if (formid == null)
    form = window.document.forms[0];
  else  
    form = window.document.getElementById(formid);
    
  var commandElement = form.command;
  var elementExists = commandElement != null && commandElement.type == "hidden";
  for (i=0;!elementExists && commandElement != null && i< commandElement.length; i++) {
    if (commandElement[i].type == "hidden") {
      elementExists = true;
      commandElement = commandElement[i];
    }
  }

  if (!elementExists) {
    var commandElement = document.createElement('input');
    commandElement.type = "hidden";
    commandElement.name = "command";
    form.appendChild(commandElement);
  }

  commandElement.value = command;
}

function submitCommand(command, formid, action) {
    setCommand(command, formid);
    
    if (formid == null) {
        form = window.document.forms[0];
    }
    else {
        form = window.document.getElementById(formid);
    }
    
    if (action != null) {
        form.action = action;
    }
    
    form.submit();
}  

// 
// Lookup Screen methods
//

function showLookup (id, sourceURL) {
  var lookupFrame = window.document.getElementById('lookupFrame' + id);
  var lookupFrameContent = window.document.getElementById('lookupFrameContent' + id);
  
  var iframeDocument;
  if (document.all) {
    iframeDocument = window.document.frames['lookupFrameContent' + id].document;
  } else {
    iframeDocument = lookupFrameContent.contentDocument;
  }

//   set a dummy timestamp so the page doesn't get cached by the proxy server
  sourceURL += sourceURL.indexOf("?") <0 ? "?" : "&";
  sourceURL += "dummyTimestamp=" + new Date().getTime();

  lookupFrameContent.src = sourceURL;
  
  lookupFrameContent.lookupPanel = eval ("YAHOO.det.panel" + id);
  lookupFrame.style.display='';
  lookupFrameContent.lookupPanel.show();
}

function closeLookup (id) {

  var lookupFrameContent = window.parent.document.getElementById("lookupFrameContent" + id);
  if (!lookupFrameContent){
     lookupFrameContent = window.document.getElementById("lookupFrameContent" + id);
  }

  if (lookupFrameContent && lookupFrameContent.lookupPanel) {

    lookupFrameContent.src = "/plato/blank.html";
    lookupFrameContent.lookupPanel.hide();
    
  }
  if (window.onPopupCloseCallback != null)
  {
    window.onPopupCloseCallback(id);
  }
// This breaks functionality (causes double submit) in I.E but works in Firefox. Will need to find an alternative.
//  if (window.parent.onPopupCloseCallback != null)
//  {
//    window.parent.onPopupCloseCallback(id);
//  }
}

//TODO move this logic into closeLookup 
function buttonCloseLookup(id) {
  var _callbackFunction=window.parent.onPopupCloseCallback;
  var lookupFrameContent = window.parent.document.getElementById("lookupFrameContent" + id);
  if (!lookupFrameContent){
     lookupFrameContent = window.document.getElementById("lookupFrameContent" + id);
     _callbackFunction=window.onPopupCloseCallback; 
  }

  if (lookupFrameContent && lookupFrameContent.lookupPanel) {

    lookupFrameContent.src = "/plato/blank.html";
    lookupFrameContent.lookupPanel.hide();
  }
  if (_callbackFunction != null)
  {
    _callbackFunction();
  }
}

//TODO reuse logic in closeLookup 
//maybe add new param  i.e. closeLookup(id,callBackRequired)

function closeLookupWithoutCallBack (id) {

  var lookupFrameContent = window.parent.document.getElementById("lookupFrameContent" + id);
  if (!lookupFrameContent){
     lookupFrameContent = window.document.getElementById("lookupFrameContent" + id);

  }

  if (lookupFrameContent && lookupFrameContent.lookupPanel) {

    lookupFrameContent.src = "/plato/blank.html";
    lookupFrameContent.lookupPanel.hide();
    
  }
}

// 
// Methods for highlist cells, row, columns, tables
//

function highlight (field, id) {
  try {
    if (field.tagName == "TABLE"  || field.tagName == "TR" || field.tagName == "TD") {
      if (field.className.indexOf ("_highlight") < 0 && (id == null || id == field.id))
        field.className = field.className + "_highlight";
    }
  
    if (field.hasChildNodes) {
      for (var i=0; i< field.childNodes.length; i++) {
        highlight (field.childNodes[i], id);
      }
    }
  } catch (e) {}  
}

function unhighlight (field, id) {
  try {
    if (field.tagName == "TABLE"  || field.tagName == "TR" || field.tagName == "TD") {
      if (field.className.indexOf ("_highlight") > 0 && (id == null || id == field.id))
          field.className = field.className.substring(0,field.className.indexOf ("_highlight"));
    }
  
    if (field.hasChildNodes) {
      for (var i=0; i< field.childNodes.length; i++) {
        unhighlight (field.childNodes[i], id);
      }
    }
  } catch (e) {}
}


function highlightColumn (field, columnStart, columnEnd) {
  try {
    if (field.tagName == "TD") {
      // get position
      var columnCount = 0;
      for (var i=0;i < field.parentNode.childNodes.length; i++) {
         
        if (field.parentNode.childNodes[i] == field) {
          if (columnStart == null) {
            columnStart = columnCount;
          }
          if (columnEnd == null) {
            columnEnd = columnStart + field.colSpan -1;
          }
          
          var tableField = field;
          while (tableField.tagName != "TABLE") {
            tableField = tableField.parentNode;
          }

          for (var j=0; j<tableField.childNodes.length; j++) {
            highlightColumn (tableField.childNodes[j], columnStart, columnEnd);
          }
        
        }
        if (field.parentNode.childNodes[i].colSpan != null)
          columnCount +=  field.parentNode.childNodes[i].colSpan;
          
      }
    } else if (field.tagName == "TR") {
      if (field.hasChildNodes) {
        columnCount=0;
        for (var i=0;i < field.childNodes.length; i++) {
        
          if (field.childNodes[i].colSpan != null) {
            if (columnCount >= columnStart && (columnCount + field.childNodes[i].colSpan -1) <= columnEnd) {
                highlight (field.childNodes[i]);
            }
  
            columnCount +=  field.childNodes[i].colSpan;
          }
        }
      }
    } else if (field.hasChildNodes) {
      for (var i=0;i < field.childNodes.length; i++) {
        highlightColumn (field.childNodes[i], columnStart, columnEnd);
      }
    }
  } catch (e) {
  }  
}

function unhighlightColumn (field, columnStart, columnEnd) {
  try {
    if (field.tagName == "TD") {
      // get position
      var columnCount = 0;
      for (var i=0;i < field.parentNode.childNodes.length; i++) {
         
        if (field.parentNode.childNodes[i] == field) {
          if (columnStart == null) {
            columnStart = columnCount;
          }
          if (columnEnd == null) {
            columnEnd = columnStart + field.colSpan -1;
          }
          
          var tableField = field;
          while (tableField.tagName != "TABLE") {
            tableField = tableField.parentNode;
          }

          for (var j=0; j<tableField.childNodes.length; j++) {
            unhighlightColumn (tableField.childNodes[j], columnStart, columnEnd);
          }
        
        }
        if (field.parentNode.childNodes[i].colSpan != null)
          columnCount +=  field.parentNode.childNodes[i].colSpan;
          
      }
    } else if (field.tagName == "TR") {
      if (field.hasChildNodes) {
        columnCount=0;
        for (var i=0;i < field.childNodes.length; i++) {
        
          if (field.childNodes[i].colSpan != null) {
            if (columnCount >= columnStart && (columnCount + field.childNodes[i].colSpan -1) <= columnEnd) {
                unhighlight (field.childNodes[i]);
            }
  
            columnCount +=  field.childNodes[i].colSpan;
          }
        }
      }
    } else if (field.hasChildNodes) {
      for (var i=0;i < field.childNodes.length; i++) {
        unhighlightColumn (field.childNodes[i], columnStart, columnEnd);
      }
    }
  } catch (e) {
  }  
}


function highlightRow (field) {
  try {
    if (field.tagName == "TR")
      highlight(field);
    else if (field.tagName == "TD")
      highlight(field.parentNode);
  } catch (e) {
  }  
}

function unhighlightRow (field) {
  try {
    if (field.tagName == "TR")
      unhighlight(field);
    else if (field.tagName == "TD")
      unhighlight(field.parentNode);
  } catch (e) {
  }  
}


function highlightTable (field) {
  var tableField = field;
  while (tableField.tagName != "TABLE") {
    tableField = tableField.parentNode;
  }
  highlight (tableField);
}

function unhighlightTable (field) {
  var tableField = field;
  while (tableField.tagName != "TABLE") {
    tableField = tableField.parentNode;
  }
  unhighlight (tableField);
}

function openHelpWindow (link) {
  // convert relative links to full paths
  if (link.indexOf("http") <0) {
    var currentUrl=window.document.URL;
    link = currentUrl.substr(0, currentUrl.indexOf ("/", 10)) + link;
  }
  
  // open the url in a new window
  window.open(link, 'HELP', 'resizable=yes,scrollbars=yes,toolbar=no,location=no,menubar=no,directories=no,status=yes,copyhistory=no');
  return false;
}

function updateCount(countInput, countOutputId, areaSize) {
  // areaSize is an indicator to how much data can be entered since textarea doesn't have a maxlength property.
  if (!areaSize) {
    if (countInput.maxLength) {
      // First look for maxLength
      areaSize = countInput.maxLength;

    } else if (countInput.size) {
      // Look for size next
      areaSize = countInput.size;

    } else {
      // If a size wasn't specified try to calculate one, this will only work on text areas.
      areaSize = countInput.rows * countInput.cols;
    }
  }

    // Visually alert the user that counterMax has been exceeded. Textareas do not respect this attribute.
    if (countInput.value.length > areaSize) {
        Element.setStyle(countOutputId, {backgroundColor : '#FF0000'}); // Red
    } else {
        Element.setStyle(countOutputId, {backgroundColor : '#FFFFFF'}); // White
    }

  Element.update(countOutputId, countInput.value.length + "/" + areaSize);
}




function getElementsByClass(searchClass,node,tag) {
  var classElements = new Array();
  if ( node == null )
    node = document;
  if ( tag == null )
    tag = '*';
  var els = node.getElementsByTagName(tag);
  var elsLen = els.length;
  var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
  for (i = 0, j = 0; i < elsLen; i++) {
    if ( pattern.test(els[i].className) ) {
      classElements[j] = els[i];
      j++;
    }
  }
  return classElements;
}

function setWaitCursor() {
  var bodyList = document.getElementsByTagName("body"); // IE: body is whole page.
  bodyList[0].style.cursor = "wait";
  var htmlList = document.getElementsByTagName("html"); // Mozilla: html is whole page, body reaches downa as far as last line of content.
  htmlList[0].style.cursor = "wait";
}

function resetWaitCursor() {
  var bodyList = document.getElementsByTagName("body"); // IE: body is whole page.
  bodyList[0].style.cursor = "default";
  var htmlList = document.getElementsByTagName("html"); // Mozilla: html is whole page, body reaches downa as far as last line of content.
  htmlList[0].style.cursor = "default";
}


function changeFilter() {
  setWaitCursor();
  setTimeout('doFilter()', 500);
}

function doFilter() {
  var yearOption  = $('yearFilter').options[$('yearFilter').selectedIndex].value;
  var classOption = $('classFilter').options[$('classFilter').selectedIndex].value;
  
  var studentList = $('studentList').getElementsByTagName('tr');

  for (i=0; i<studentList.length; i++) {
    if ((Element.hasClassName(studentList[i], yearOption)  || yearOption=="all") && 
        (Element.hasClassName(studentList[i], classOption) || classOption=="all")) {
      Element.show(studentList[i]);
    } else {
      Element.hide(studentList[i]);
    }
  }

  resetWaitCursor();
}

var selectedOption = -1;
var selectedAchievementOption = -1;
var selectedEffortOption = -1;

var palette = new Array(5);
palette[0] = "#8DF0EB";
palette[1] = "#0DF97D";
palette[2] = "#FFFA8B";
palette[3] = "#FF7B45";
palette[4] = "#FE0B0D";


function addEvent(obj, evType, fn, useCapture) {
  // General function for adding an event listener
  if (obj.addEventListener) {
    obj.addEventListener(evType, fn, useCapture);
    return true;
  } else if (obj.attachEvent) {
    var r = obj.attachEvent('on' + evType, fn);
    return r;
  }
}

function addKeyEvent(keyEventHandler) {
  // Specific function for this particular browser
  var e = (document.addEventListener) ? 'keypress' : 'keydown';
  addEvent(document,e,keyEventHandler,false);
}

// this function standardised events between IE and Mozilla
function standardizedEvent(event) {
  if (!event)
    event = window.event;

  if (!event.stopPropagation) {
    event.stopPropagation = function() {this.cancelBubble = true;if (!event.altKey) event.keyCode=0;}
  }

  if (!event.preventDefault) {
    event.preventDefault = function() { this.returnValue = false;if (!event.altKey) event.keyCode=0;}
  } if (typeof event.layerX == 'undefined' &&
    typeof event.offsetX == 'number') {
    event.layerX = event.offsetX
    event.layerY = event.offsetY
  }

  if (!event.target && event.srcElement) {
    event.target = event.srcElement
    if (event.type == 'onmouseout') {
      event.relatedTarget = event.toElement
    } else if (event.type == 'onmouseover') {
      event.relatedTarget = event.fromElement
    }
  }
  
  if (!event.explicitOriginalTarget) {
    event.explicitOriginalTarget = window.event.srcElement;
  }
  
  if (document.all) {
    event.which = event.button;
  } 
  
  if (event.explicitOriginalTarget.tagName == "INPUT")
    event.targetName = event.explicitOriginalTarget.type;
  else 
    event.targetName = event.explicitOriginalTarget.tagName;
    
  return event;
}

function disableNavigation() {
  addKeyEvent(disableNavigationHandler);
}

var secretlyByPassed = false;
function disableNavigationHandler(event) {
  event = standardizedEvent (event);

  // disable backspace except for text fields (non-readonly and non-disabled)
  var disable =   getKeyCode(event) == 8    // Backspace key pressed 
                  &&
                  (
                    (event.targetName != "TEXTAREA" && event.targetName != "text" && event.targetName != "password")    // Non-text fields
                    || 
                    ((event.targetName == "TEXTAREA" || event.targetName == "text" || event.targetName == "password") && (event.target.readOnly || event.target.disabled))  // readOnly or disabled text fields
                  );
  
  // disable alt keys
  if (event.altKey) {
    // disable alt-left (back page)
    //         alt-right (forward page)
    disable = disable || getKeyCode(event) == 37  // left
                      || getKeyCode(event) == 39; // right
  }

  // disable control keys 
  if (event.ctrlKey) {
    // disable ctrl-b (bookmark).
    //         ctrl-e (search).
    //         ctrl-h (history).
    //         ctrl-i (favourites)
    //         ctrl-l (open location).
    //         ctrl-n (new window) 
    //         ctrl-o (open location).
    //         ctrl-r (refresh).
    disable = disable || getKeyCode(event) == 66   //b
                      || getKeyCode(event) == 98   //B
                      || getKeyCode(event) == 69   //e
                      || getKeyCode(event) == 101  //E
                      || getKeyCode(event) == 72   //h
                      || getKeyCode(event) == 104  //H
                      || getKeyCode(event) == 73   //i
                      || getKeyCode(event) == 105  //I
                      || getKeyCode(event) == 76   //l
                      || getKeyCode(event) == 108  //L
                      || getKeyCode(event) == 78   //N
                      || getKeyCode(event) == 110  //n
                      || getKeyCode(event) == 79   //O
                      || getKeyCode(event) == 111  //o
                      || getKeyCode(event) == 82   //R
                      || getKeyCode(event) == 114; //r
  }
                                         
  // disable F3 (search), F5 (refresh)., and F11 (full screen)
  // Mozilla is a bit stupid with function keys. Need to check for charCode == 0 to prevent other keys being disabled.
//  if (document.all || event.charCode == 0) {
//      disable = disable || getKeyCode(event) == 114   // F3
//                        || getKeyCode(event) == 116   // F5
//                        || (getKeyCode(event) == 122 && document.all);  // F11 - only IE
//  }
 
  if (event.ctrlKey && event.altKey && getKeyCode(event)==32) {
    secretlyByPassed = true;
  }
  
  if (disable && !secretlyByPassed) {
    event.preventDefault();
  }
}

function getKeyCode(event) {
  return event.keyCode > 0 ? event.keyCode : event.charCode ? event.charCode : 0;
}

function disableRightMouseClick() {
  if (document.all) {
    document.onmousedown=disableRightMouseClickHandler;
  } else {
    document.oncontextmenu=disableRightMouseClickHandler;
  }
}


function showPleaseWait(){
    YAHOO.det.pleasewait.show();
}

function printInLandScape(){
    alert("Please change Image Orientation to Landscape to print the page in Landscape.");
}



function hidePleaseWait(w){
    var wd = w||window; 
    wd.YAHOO.det.pleasewait.hide();
}

    function openStudentDossier(studentRecordNo,orgUnitRecordNo,calendarYear){
        sdFrmContent.src = "studentDossiers.do?command=list&studentRecordNo="+studentRecordNo+"&currentOfferOrgUnitRecordNo="+orgUnitRecordNo+"&currentOfferCalendarYear="+calendarYear;
        showPleaseWait();
        setTimeout("showStudentDossier()", 1200);
    }
    
    function showStudentDossier(){
        hidePleaseWait();
        sdFrm.style.display = '';
        sdFrmContent.lookupPanel = eval ("YAHOO.det.panel" + sdFrmId);
        sdFrmContent.lookupPanel.show();
    }

/* text field to submit form if enter pressed */
function isEnterPressed(e) {
    return ((window.event && (e.keyCode == 13)) || // IE
            (e.which && (e.which == 13))); // Netscape/Firefox/Opera
}

function submitFormOnEnter(e) {
    if (isEnterPressed(e)) { // Netscape/Firefox/Opera
        jQuery(e.target).closest('form').first().trigger('submit');
    }
}

/*
 *   Code copied from XaprB library and modified to work independently.
 */

if ( typeof(Plato) === 'undefined' ) {
   Plato = new Object();
}


Plato.InputMask = {

    createInputMask: function(inputField, inputMask) {
        inputField.mask=inputMask;
        // Note: for some weird reason using an addEventListener causing the 
        // wrong keyCodes to be returned in IE....aaaarrrggghhhh!
        inputField.onkeypress = Plato.InputMask.applyMask;
        if (document.all) {
            // delete/arrow etc in IE only works here.
            inputField.onkeydown = Plato.InputMask.processEscapeChars;
        }
    },

    applyMask: function(event) {
        event = event ? event : window.event;
        var widget = event.target ? event.target : event.srcElement;
        var mask = widget.mask;
        var keyCode = getKeyCode(event);
        var selectionStart =  Plato.InputMask.getSelectionStart(widget);
        var selectionEnd =  Plato.InputMask.getSelectionEnd(widget);

        var ch      = String.fromCharCode(keyCode);
         
        if (!document.all && event.charCode == 0) {
            // Mozilla only
            Plato.InputMask.processEscapeChars (event);
            return;
        }
         
        if ( Plato.InputMask.isPrintable(keyCode) || mask.indexOf(ch) >=0) {
            // enable overwrite mode.
            if (selectionStart == selectionEnd || selectionEnd != widget.value.length) {
                selectionEnd = selectionStart + 1;
            }

            var maskChar = mask.charAt(selectionStart);
            
            // if user types over a fixed maskchar just ignore it and use the maskchar
            var regexChar;
            if (Plato.InputMask.isFixedMaskChar(maskChar)) {
                ch = maskChar;
            } else {
                regexChar = Plato.InputMask.getRegexChar(maskChar)
            }
            
            var str     = widget.value.substring(0,selectionStart) + ch + widget.value.substring(selectionEnd);
            if (Plato.InputMask.isFixedMaskChar(maskChar) || (regexChar.test(ch) && selectionEnd <= mask.length )) {
                if (str.length < selectionEnd) {
                    selectionEnd= str.length;
                }
                
                // if the next character in the fix is a fixed mask char, autoatically insert it.
                while (Plato.InputMask.isFixedMaskChar(mask.charAt(selectionEnd))) {
                    str = str.substring(0,selectionEnd) + mask.charAt(selectionEnd) + str.substring(selectionEnd+1);
                    str = str.substring(0,mask.length);
                    selectionEnd +=1;
                }
                widget.value = str;
               
                if (document.selection) {
                    // IE
                    var range = widget.createTextRange();
                    range.collapse(true);
                    range.moveEnd('character', selectionEnd);
                    range.moveStart('character', selectionEnd); 
                    range.select();
                } else {
                    // Mozilla
                    widget.selectionEnd = selectionEnd;
                    widget.selectionStart = widget.selectionEnd;
                }
            }
            Event.stop(event);
        }
    },
  
    processEscapeChars: function(event) {
        event = window.event ? window.event : event;
        var keyCode = getKeyCode(event);
        // allow these keys to get processed untouched.  
        switch (keyCode) {
          case 9:  // tab
          case 35: // end
          case 36: // home
          case 37: // left
          case 38: // up
          case 39: // right
          case 40: // down
            return;
          default:
             break;
        }        
        
        
        var widget = event.target ? event.target : event.srcElement;
        
        var selectionStart;
        var selectionEnd;
        
        widget.focus();
        if (document.selection) {
            // IE
            selectionStart = Math.abs(document.selection.createRange().moveStart("character", -1000000));
            selectionEnd = Math.abs(document.selection.createRange().moveEnd("character", -1000000));
        } else {
            // Mozilla
            selectionStart = widget.selectionStart;
            selectionEnd = widget.selectionEnd;
        }

        if (keyCode == 8) {
            if (selectionEnd == widget.value.length) {
               // allow backspace of last char
               return;
            } else {
                // Treat backspace like a left arrow if the cursor is not at the end of the string
                if (document.selection) {
                   // IE
                   var range = widget.createTextRange();
                   range.collapse(true);
                   range.moveEnd('character', selectionEnd-1);
                   range.moveStart('character', selectionEnd-1); 
                   range.select();
                } else {
                   // Mozilla
                   widget.selectionEnd = widget.selectionEnd - 1;
                   widget.selectionStart = widget.selectionEnd;
                }
            }
            // IE Fix: prevent this event from being executed in keypress.
            Event.stop(event);
        }
        
        // stop all other escape characters
        if (document.all) {
            try {
              event.cancelBubble=true;
              event.keyCode=0;
            } catch (e) {}
        } else {
            Event.stop(event);
        }
    },
   

    getSelectionStart: function(widget) {
        widget.focus();
        if (document.selection) {
            // IE
            return Math.abs(document.selection.createRange().moveStart("character", -1000000));
        } else {
            // Mozilla
            return widget.selectionStart;
        }
    },

    getSelectionEnd: function(widget) {
        widget.focus();
        if (document.selection) {
            // IE
            return Math.abs(document.selection.createRange().moveEnd("character", -1000000));
        } else {
            // Mozilla
            return widget.selectionEnd;
        }
    },

    isPrintable: function(keyCode) {
        return ( keyCode >= 32 && keyCode<=127);
    },

    getRegexChar: function(theChar) {
        if (theChar == 'C') {
            return new RegExp('[A-Z,a-z]');
        } else if (theChar == 'N') {
            return new RegExp('[0-9]');
        } else if (theChar == 'A') {
            return new RegExp('[A-Z,a-z,0-9]');
        } else {
            return new RegExp(theChar);
        } 
    },

    isFixedMaskChar: function(theChar) {
        try {
            return 'CNA'.search(theChar) <0;
        } catch (e) {
            return true;
        }
    }
};

Plato.SessionTimeoutController = {
    sessionTimeoutWarningDebug : new Boolean(false),  // Debug
    sessionTimeoutWarningTimerID: null,               // Timer ID
    sessionTimeoutSound: "chatcall.wav",              // Default Timeout sound

    // Keep track of the approaching session timeout event
    monitorSessionTimeout : function(maxInactiveInterval, sessionTimeoutWarningMins, pSessionTimeoutSound)
    {
        // session is active; session timeout will be monitored
        var periodUntilSessionTimeoutInSeconds = maxInactiveInterval;
        var warningPeriodInSeconds =  sessionTimeoutWarningMins * 60; // Warn X minutes before timeout
        var timerValueInMilliseconds = (periodUntilSessionTimeoutInSeconds - warningPeriodInSeconds) * 1000;
        
        this.sessionTimeoutSound = pSessionTimeoutSound;
        
        if (this.sessionTimeoutWarningDebug == true) {
          window.alert("periodUntilSessionTimeoutInSeconds = " + periodUntilSessionTimeoutInSeconds + "(s), " + (periodUntilSessionTimeoutInSeconds / 60) + "(m)");
          window.alert("warningPeriodInSeconds = " + warningPeriodInSeconds + "(s), " + (warningPeriodInSeconds / 60) + "(m)");
          window.alert("timerValueInMilliseconds = " + timerValueInMilliseconds/1000 + "(s), " + (timerValueInMilliseconds / (60*1000)) + "(m)");
        }
        
        window.clearTimeout(this.sessionTimeoutWarningTimerID);
        this.sessionTimeoutWarningTimerID = self.setTimeout('Plato.SessionTimeoutController.showSessionTimeoutWarning(' + sessionTimeoutWarningMins+ ')', timerValueInMilliseconds); // In milliseconds
    },


    // Hide the session timeout warning window
    hideSessionTimeoutWarning : function ()
    {
      window.document.getElementById("sessionTimeoutWarning").style.display="none";
      window.document.getElementById("sessionTimeoutWarning").width="0px";
      window.document.getElementById("sessionTimeoutWarning").height="0px";
      window.document.getElementById("sessionTimeoutWarning").FRAMEBORDER="0px";
    },

    // Get the time in 12Hour format HH:MM AM/PM
    getTimeIn12HFormat : function(date)
    {
      var hours   = date.getHours();
      var minutes = date.getMinutes();
      var ampm    = "";
      
      // Format minutes to 2 decimal places
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      
      // Work out if morning or afternoon
      if (hours > 11) {
        ampm = "PM";
      } else {
        ampm = "AM";
      }
      
      // Convert to 12 hour format
      if (hours > 12) {
        hours = hours - 12;
      }
      if (hours == 0) {
        hours = 12;
      }

      // 12H time format
      var formattedTime = hours + ":" + minutes + " " + ampm;
      return formattedTime;
    }, 

    // Show the session timeout warning window
    showSessionTimeoutWarning :function (sessionTimeoutWarningMins)
    {
      var sessionTimeoutWarningFrame = window.document.getElementById("sessionTimeoutWarning");
      var sessionTimeoutWarningDocument;

      var divWidth  = sessionTimeoutWarningFrame.width;
      var divHeight = sessionTimeoutWarningFrame.height;
  
      if (document.all) {
        sessionTimeoutWarningDocument = window.document.frames["sessionTimeoutWarning"].document;
      } else {
        sessionTimeoutWarningDocument = sessionTimeoutWarningFrame.contentDocument;
        divWidth -= 6;
        divHeight -= 6;
      }
      
      // Calculate the times for message display and session timeout
      var currentTime = new Date();
      var timeOfNow = this.getTimeIn12HFormat(currentTime);
      currentTime.setMinutes(currentTime.getMinutes() + sessionTimeoutWarningMins);
      var timeOfTimeout = this.getTimeIn12HFormat(currentTime);

      sessionTimeoutWarningDocument.writeln('<html><body leftmargin="0" topmargin=0" rightmargin="0" bottommargin="0" marginwidth="0" marginheight=0">');
      sessionTimeoutWarningDocument.writeln("<div style='text-align:center;margin:0; width:" + divWidth + "; height:" + divHeight + "; border: solid #003399 3px;background-color:#FFFFFF'>");
      sessionTimeoutWarningDocument.writeln("<br><table width='100%'>");
      sessionTimeoutWarningDocument.writeln("<tr><td align='center'><img src='/plato/stylesets/schoolsapp/icons/Attention.gif'/></td></tr>");
      sessionTimeoutWarningDocument.writeln("<tr><td align='center' style='font: 16px Arial'><b>You are about to be logged out due to inactivity.</b></td></tr>");
      sessionTimeoutWarningDocument.writeln("<tr><td align='center' style='font: 16px Arial'></td></tr>");
      sessionTimeoutWarningDocument.writeln("<tr><td align='center' style='font: 16px Arial'>This message was generated at " + timeOfNow + ", your session will expire at " + timeOfTimeout + "." + "</td></tr>");
      sessionTimeoutWarningDocument.writeln("<tr><td align='center' style='font: 16px Arial'>Please either save the work you are currently doing or select a different menu option if you do not want to be logged out.</td></tr>");
      sessionTimeoutWarningDocument.writeln('<tr><td align="center" style="font: 16px Arial"><input type="button" value="OK" onclick="window.parent.Plato.SessionTimeoutController.hideSessionTimeoutWarning();"/></td></tr>');
      sessionTimeoutWarningDocument.writeln('</table><br>');
      
      if (this.sessionTimeoutSound != "silent") {
        sessionTimeoutWarningDocument.writeln("<embed src='/plato/stylesets/schoolsapp/sounds/" + this.sessionTimeoutSound + "' autostart='true' loop='false' hidden='true'>");
        sessionTimeoutWarningDocument.writeln("<bgsound src='/plato/stylesets/schoolsapp/sounds/" + this.sessionTimeoutSound + "' loop='1'>");
      }
      sessionTimeoutWarningDocument.writeln('</body></html>');
      sessionTimeoutWarningDocument.close();

      var posX, posY;
      if (document.all) {
        var width = document.documentElement.clientWidth;
        var height = document.documentElement.clientHeight;
        posX = (width - 600)/2 + document.documentElement.scrollLeft;
        posY = (height - 300)/3 + document.documentElement.scrollTop;    
      } else {
        var width = window.innerWidth;
        var height= window.innerHeight;
        posX = (width - 600)/2 + window.scrollX;
        posY = (height - 300)/3 + window.scrollY;    
      }
    
      sessionTimeoutWarningFrame.style.left = posX +"px";
      sessionTimeoutWarningFrame.style.top = posY +"px";
      sessionTimeoutWarningFrame.style.display="block";
    }
}


Plato.NavigationController = {
  /**
   * Gets the value of the specified cookie.
   *
   * name  Name of the desired cookie.
   *
   * Returns a string containing value of specified cookie,
   *   or null if cookie does not exist.
   */
  getCookie: function getCookie(name)
  {
      var dc = document.cookie;
      var prefix = name + "=";
      var begin = dc.indexOf("; " + prefix);
      if (begin == -1)
      {
          begin = dc.indexOf(prefix);
          if (begin != 0) return null;
      }
      else
      {
          begin += 2;
      }
      var end = document.cookie.indexOf(";", begin);
      if (end == -1)
      {
          end = dc.length;
      }
      return unescape(dc.substring(begin + prefix.length, end));
  },
  

  checkTransactionState : function() {
    return confirm("You have not saved the data. Do you wish to continue?");
  },
  
  toggleMenu : function() {
    if (document.cookie.indexOf("showmenu=false") >= 0) {
      this.showMenu(true);
    } else {
      this.hideMenu(true);
    }
    return true;
  },  
  
  showMenu : function(setCookie)  {
    var sideMenu = document.getElementById("sidemenu");
    var showMenuImage = document.getElementById("showMenuImage");
    var hideMenuImage = document.getElementById("hideMenuImage");
    var menuTextImage = document.getElementById("menuTextImage");

    sideMenu.style.display="";
    menuTextImage.style.display="none";
    
    if (setCookie) {
        document.cookie="showmenu=true;path=/plato"
        hideMenuImage.style.display="";
        showMenuImage.style.display="none";
    }
  },
  
  hideMenu : function(setCookie)  {
    var sideMenu = document.getElementById("sidemenu");
    var showMenuImage = document.getElementById("showMenuImage");
    var hideMenuImage = document.getElementById("hideMenuImage");
    var menuTextImage = document.getElementById("menuTextImage");

    sideMenu.style.display="none";
    menuTextImage.style.display="";

    if (setCookie) {
        document.cookie="showmenu=false;path=/plato"
        hideMenuImage.style.display="none";
        showMenuImage.style.display="";
    }
  }, 

  autoHideMenu : function()  {
    var theCookie = document.cookie;
    if (document.cookie.indexOf("showmenu=false") >= 0) {
        var sideMenu = document.getElementById("sidemenu");
        var menuTextImage = document.getElementById("menuTextImage");
        sideMenu.style.display="none";
        menuTextImage.style.display="";
    }
  }
}



Plato.Slider = {
    createSlider : function(textfield, tickValue, minValue)
    {
        var Event = YAHOO.util.Event,
            Dom   = YAHOO.util.Dom,
            lang  = YAHOO.lang,
            slider;
            
            
        var bg = textfield + "-slider-bg" ;
        var thumb = textfield + "-slider-thumb" ;
        tickValue = tickValue == null ? 1 : tickValue;
        minValue = minValue == null ? 0 : minValue;

        // The slider can move 0 pixels up
        var topConstraint = 0;
    
        // The slider can move 200 pixels down
        var bottomConstraint = 200;
    
    
        // The amount the slider moves when the value is changed with the arrow
        // keys
        var keyIncrement = 20;
        var scaleFactor = tickValue / keyIncrement;
    
        Event.onDOMReady(function() {
    
            slider = YAHOO.widget.Slider.getHorizSlider(bg, 
                             thumb, topConstraint, bottomConstraint, keyIncrement);
    
            slider.getRealValue = function() {
                return Math.round(this.getValue() * scaleFactor) + minValue;
            }
    
            slider.subscribe("change", function(offsetFromStart) {
    
                var fld = Dom.get(textfield);
    
                // use the scale factor to convert the pixel offset into a real
                // value
                var actualValue = slider.getRealValue();
    
                // update the text box with the actual value
                fld.value = actualValue;
    
                // Update the title attribute on the background.  This helps assistive
                // technology to communicate the state change
                Dom.get(bg).title = "slider value = " + actualValue;
    
            });
            slider.setValue((window.document.getElementById(textfield).value - minValue)/scaleFactor);
        });
    }
}

//
// tabSelected(theTabId)
// - Imitates the selection of a tab by unhighlighting the old tab and highlighting the new tab
//
function tabSelected(theTabId) {
//    if (debug == true) {
//        alert("[tabSelected(" + "theTabId = " + theTabId + ", " + "class = " + document.getElementById(theTabId).className + ")]");
//    }

    // Get all the old highlighted tabs and unhighlight them by changing the class name (scope = whole page!)
    var classElements = new Array();
    classElements = getElementsByClass('tabs_current', null, null);
//    if (debug == true) {
//        alert("[tabSelected(" + "classElements.length = " + classElements.length + ")]");
//    }
    for (i = 0, len = classElements.length; i < len; i++) {
//        if (debug == true) {
//            alert("[tabSelected(" + "classElements[i].id = " + classElements[i].id + ")]");
//        }
        document.getElementById(classElements[i].id).className = 'tabs';
    }

    // Highlight the new tab
    document.getElementById(theTabId).className = 'tabs_current';
//    if (debug == true) {
//        alert("[tabSelected(" + "theTabId = " + theTabId + ", " + "class = " + document.getElementById(theTabId).className + ")]");
//    }
}

//Omer Beimnet - June 2011
//to be used with ftpopup tag
function showLookupAndPostForm(iframeName, formId, formCommand) {
  var lookupFrame = window.document.getElementById('lookupFrame' + iframeName);
  var lookupFrameContent = window.document.getElementById('lookupFrameContent' + iframeName);
  
  var iframeDocument;
  if (document.all) {
    iframeDocument = window.document.frames['lookupFrameContent' + iframeName].document;
  } else {
    iframeDocument = lookupFrameContent.contentDocument;
  }
  
  lookupFrameContent.lookupPanel = eval ("YAHOO.det.panel" + iframeName);
  lookupFrame.style.display='';
  lookupFrameContent.lookupPanel.show();
  
  
  var form;
  if (formId) {
    form = window.document.getElementById(formId);
  } else {
    form = document.forms[0];
  }
  form.target = 'lookupFrameContent'+iframeName;
  if (formCommand) {
    form.command.value = formCommand;
  }

  // Set the lookupId so we know which popup to close
  //alert("iframeName = " + iframeName);
  //alert("form = " + form);
  //alert("form.lookupId = " + form.lookupId);
  //alert("b form.lookupId.value = " + form.lookupId.value);
  if (form.lookupId) {
  	form.lookupId.value = iframeName;
  }
  //alert("a form.lookupId.value = " + form.lookupId.value);
  
  form.submit();
}
