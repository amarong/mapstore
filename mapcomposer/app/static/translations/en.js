/**
 * Copyright (c) 2009-2010 The Open Planning Project
 */
/*
	NOTE: configuration customization could override
	these strings
*/
GeoExt.Lang.add("en", {
    "GeoExplorer.prototype": {
        zoomSliderText: "<div>Zoom Level: {zoom}</div><div>Scale: 1:{scale}</div>",
        loadConfigErrorText: "Trouble reading saved configuration: <br />",
        loadConfigErrorDefaultText: "Server Error.",
        xhrTroubleText: "Communication Trouble: Status ",
        layersText: "Layers",
		legendText: "Legend",
        titleText: "Title",
        zoomLevelText: "Zoom level",
        saveErrorText: "Trouble saving: ",
        bookmarkText: "Bookmark URL",
        permakinkText: "Permalink",
        appInfoText: "Credits",
        aboutText: "About GeoExplorer",
        mapInfoText: "Map Info",
        descriptionText: "Description",
        contactText: "Contact",
        aboutThisMapText: "About this Map",
		resetButtonTooltip: "Reset Page",
		helpButtonTooltip: "Help",
        searchTabTitle : "Search",
        viewTabTitle : "View",
        portalTabTitle : "Portal",
		markerPopupTitle: "Details",
		mainLoadingMask: "Please wait, loading..."
    },
    
    "GeoExplorer.Composer.prototype": {
        exportMapText: "Publish Map",
		uploadText: "Upload",
        toolsTitle: "Choose tools to include in the toolbar:",
        previewText: "Preview",
        backText: "Back",
        nextText: "Next",
        loginText: "Login",
        loginErrorText: "Invalid username or password.",
        userFieldText: "User",
        passwordFieldText: "Password",
        fullScreenText: "Full Screen",
        cswMsg: 'Loading...',
		cswFailureAddLayer: ' The layer cannot be added to the map',
        alertEmbedTitle: 'Attention',
        alertEmbedText: "Save the map before using the 'Publish Map' tool",
	    cswZoomToExtentMsg: "BBOX not available",
		cswZoomToExtent: "CSW Zoom To Extent"
    },

    "gxp.menu.LayerMenu.prototype": {
        layerText: "Layer"
    },

    "gxp.plugins.AddLayers.prototype": {
        addActionMenuText: "Add layers",
        addActionTip: "Add layers",
        addServerText: "Add a New Server",
        addButtonText: "Add layers",
        untitledText: "Untitled",
        addLayerSourceErrorText: "Error getting WMS capabilities ({msg}).\nPlease check the url and try again.",
        availableLayersText: "Available Layers",
        expanderTemplateText: "<p><b>Abstract:</b> {abstract}</p>",
        panelTitleText: "Title",
        layerSelectionText: "View available data from:",
        doneText: "Done",
        removeFilterText: "Clear filter", 
        filterEmptyText: "Filter",
        uploadText: "Upload Data"
    },
    
	 "gxp.plugins.RemoveOverlays.prototype": {
	    removeOverlaysMenuText: "Remove overlays",
	    removeOverlaysActionTip: "Removes all overlays from the map",
	    removeOverlaysConfirmationText: "Are you sure you want to remove all loaded overlays from the map?"
    }, 

    "gxp.plugins.BingSource.prototype": {
        title: "Bing Layers",
        roadTitle: "Bing Roads",
        aerialTitle: "Bing Aerial",
        labeledAerialTitle: "Bing Aerial With Labels"
    },

    "gxp.plugins.GoogleEarth.prototype": {
        apiKeyPrompt: "Please enter the Google API key for ",
        menuText: "3D Viewer",
        tooltip: "Switch to 3D Viewer"
    },
    
    "gxp.plugins.GoogleSource.prototype": {
        title: "Google Layers",
        roadmapAbstract: "Show street map",
        satelliteAbstract: "Show satellite imagery",
        hybridAbstract: "Show imagery with street names",
        terrainAbstract: "Show street map with terrain"
    },

    "gxp.plugins.LayerProperties.prototype": {
        menuText: "Layer Properties",
        toolTip: "Layer Properties"
    },
    
    "gxp.plugins.LayerTree.prototype": {
        rootNodeText: "Layers",
        overlayNodeText: "Default",
        baseNodeText: "Background"
    },

    "gxp.plugins.Legend.prototype": {
        menuText: "Show Legend",
        tooltip: "Show Legend"
    },    
    
    "gxp.plugins.Measure.prototype": {
        lengthMenuText: "Length",
        areaMenuText: "Area",
        lengthTooltip: "Measure length",
        areaTooltip: "Measure area",
        measureTooltip: "Measure",
        bearingMenuText: "Bearing ",
        bearingTooltip: "Measure Bearing"
    },

    "gxp.plugins.Navigation.prototype": {
        menuText: "Pan Map",
        tooltip: "Pan Map"
    },

    "gxp.plugins.NavigationHistory.prototype": {
        previousMenuText: "Zoom To Previous Extent",
        nextMenuText: "Zoom To Next Extent",
        previousTooltip: "Zoom To Previous Extent",
        nextTooltip: "Zoom To Next Extent"
		
    },

    "gxp.plugins.OSMSource.prototype": {
        title: "OpenStreetMap Layers",
        mapnikAttribution: "Data CC-By-SA by <a href='http://openstreetmap.org/'>OpenStreetMap</a>",
        osmarenderAttribution: "Data CC-By-SA by <a href='http://openstreetmap.org/'>OpenStreetMap</a>"
    },

    "gxp.plugins.Print.prototype": {
        menuText: "Print Map",
        tooltip: "Print Map",
        previewText: "Print Preview",
        notAllNotPrintableText: "Not All Layers Can Be Printed",
        nonePrintableText: "None of your current map layers can be printed",
        notPrintableLayersText: "Please remove these layers and all the markers before print. Following layers can not be printed:"
    },

    "gxp.plugins.MapQuestSource.prototype": {
        title: "MapQuest Layers",
        osmAttribution: "Tiles Courtesy of <a href='http://open.mapquest.co.uk/' target='_blank'>MapQuest</a> <img src='http://developer.mapquest.com/content/osm/mq_logo.png' border='0'>",
        osmTitle: "MapQuest OpenStreetMap",
        naipAttribution: "Tiles Courtesy of <a href='http://open.mapquest.co.uk/' target='_blank'>MapQuest</a> <img src='http://developer.mapquest.com/content/osm/mq_logo.png' border='0'>",
        naipTitle: "MapQuest Imagery"
    },

    "gxp.plugins.RemoveLayer.prototype": {
        removeMenuText: "Remove layer",
        removeActionTip: "Remove layer"
    },

    "gxp.plugins.WMSGetFeatureInfo.prototype": {
        infoActionTip: "Get Feature Info",
        popupTitle: "Feature Info",
		noDataMsg: "No data returned from the server",
		maskMessage: "Getting Feature Info..."
    },
	
	"gxp.plugins.WMSGetFeatureInfoMenu.prototype": {
        infoActionTip: "Get Feature Info",
        popupTitle: "Feature Info",
		noDataMsg: "No data returned from the server",
		maskMessage: "Getting Feature Info...",
		activeActionTip:"Active info on selected layer"
    },

    "gxp.plugins.Zoom.prototype": {
        zoomInMenuText: "Zoom In",
        zoomOutMenuText: "Zoom Out",
        zoomInTooltip: "Zoom In",
        zoomOutTooltip: "Zoom Out"
    },
    
    "gxp.plugins.ZoomToExtent.prototype": {
        menuText: "Zoom To Max Extent",
        tooltip: "Zoom To Max Extent"
    },
    
    "gxp.plugins.ZoomToDataExtent.prototype": {
        menuText: "Zoom to layer extent",
        tooltip: "Zoom to layer extent"
    },

    "gxp.plugins.ZoomToLayerExtent.prototype": {
        menuText: "Zoom to layer extent",
        tooltip: "Zoom to layer extent"
    },
    
    "gxp.WMSLayerPanel.prototype": {
        aboutText: "About",
        titleText: "Title",
        nameText: "Name",
        descriptionText: "Description",
        displayText: "Display",
        opacityText: "Opacity",
        formatText: "Format",
        transparentText: "Transparent",
        cacheText: "Cache",
        cacheFieldText: "Use cached version",
        stylesText: "Styles"
    },

    "gxp.NewSourceWindow.prototype": {
        title: "Add New Server...",
        cancelText: "Cancel",
        addServerText: "Add Server",
        invalidURLText: "Enter a valid URL to a WMS endpoint (e.g. http://example.com/geoserver/wms)",
        contactingServerText: "Contacting Server..."
    },

    "gxp.ScaleOverlay.prototype": { 
        zoomLevelText: "Zoom level"
    },
    
    "gxp.plugins.AddGroup.prototype": { 
	    addGroupMenuText: "Add Group",
	    addGroupActionTip: "Add a new group in the layer tree",   
	    addGroupDialogTitle: "New Group", 
	    addGroupFieldSetText: "Group Name",
	    addGroupFieldLabel: "New Group",
	    addGroupButtonText: "Add Group",
	    addGroupMsg: "Please enter a group name"	
    },
    
    "gxp.plugins.RemoveGroup.prototype": { 
	    removeGroupMenuText: "Remove Group",
	    removeGroupActionTip: "Remove a group from the layer tree",
	    removeGroupActionTip: "Removes the selected group and own layers from the map",
	    removeGroupConfirmationText: "Are you sure you want to remove the selected group ? The all layers inside this group will be removed from the map."
    },
    
    "gxp.plugins.SaveDefaultContext.prototype": { 
	    saveDefaultContextMenuText: "Save default context",
	    saveDefaultContextActionTip: "Save Map context",
	    contextSaveSuccessString: "Context saved succesfully",
	    contextSaveFailString: "Context not saved succesfully",
	    contextMsg: "Loading..."
    },
    "gxp.plugins.GeoReferences.prototype": {
        initialText: "Select an area",
        menuText: "GeoReferences",
        tooltip: "GeoReferences"
    },
    "gxp.plugins.ZoomBox.prototype":{
        zoomInMenuText: "Zoom Box In",
        zoomOutMenuText: "Zoom Box Out",
        zoomInTooltip: "Zoom Box In",
        zoomOutTooltip: "Zoom Box Out"
    },
    "GeoExt.ux.PrintPreview.prototype":{
        paperSizeText: "Paper size:",
        resolutionText: "Resolution:",
        printText: "Print",
        emptyTitleText: "Enter map title here.",
        includeLegendText: "Include legend?",
        legendOnSeparatePageText: "Legend on separate page?",
        compactLegendText: "Compact legend?",	
        emptyCommentText: "Enter comments here.",
        creatingPdfText: "Creating PDF..."
    },
    "gxp.plugins.GeonetworkSearch.prototype":{
        geonetworkSearchText: "View metadata",
        geonetworkSearchActionTip: "View metadata"
    },
    "gxp.plugins.GroupProperties.prototype":{
        groupPropertiesMenuText:  "Group Properties",
        groupPropertiesActionTip:  "Group Properties",
        groupPropertiesDialogTitle: "Group Properties - ",
        groupPropertiesFieldSetText: "Group Name",
        groupPropertiesFieldLabel: "New Group Name",
        groupPropertiesButtonText: "Done",
        groupPropertiesMsg: "Please enter a group name"
    },
    "gxp.plugins.Login.prototype":{
        loginText: "Login",
        loginErrorText: "Invalid username or password.",
        userFieldText: "User",
        passwordFieldText: "Password"
    },
    "gxp.plugins.FeatureGrid.prototype": {
        displayFeatureText: "Display on map",
        firstPageTip: "First page",
        previousPageTip: "Previous page",
        zoomPageExtentTip: "Zoom to page extent",
        nextPageTip: "Next page",
        nextPageTip: "Last page",
        totalMsg: "Total: {0} records"
    },
    "gxp.plugins.QueryForm.prototype": {
        queryActionText: "Query",
        queryMenuText: "Query layer",
        queryActionTip: "Query the selected layer",
        queryByLocationText: "Region Of Interest",
        currentTextText: "Current extent",
        queryByAttributesText: "Query by attributes",
        queryMsg: "Querying...",
        cancelButtonText: "Reset",
        noFeaturesTitle: "No Match",
        noFeaturesMessage: "Your query did not return any results.",
        title: "Search",
        northLabel:"North",
        westLabel:"West",
        eastLabel:"East",
        southLabel:"South",
        setAoiText: "SetROI",
        setAoiTooltip: "Enable the SetBox control to draw a ROI (BBOX) on the map",
        attributeEnablement: "Query by Attribute",
        attributeEnablementMsg: "Invalid search Type! To use this you have to select 'Feature' type and to select a vector layer before.",
        searchType: "Base Settings",
        typeLabel: "Type",
        featureLabel: "Max Features"
    },
    "gxp.EmbedMapDialog.prototype": {
        publishMessage: "Your map is ready to be published to the web! Simply copy the following HTML to embed the map in your website:",
        heightLabel: "Height",
        widthLabel: "Width",
        mapSizeLabel: "Map Size",
        miniSizeLabel: "Mini",
        smallSizeLabel: "Small",
        premiumSizeLabel: "Premium",
        largeSizeLabel: "Large"
    },
    "gxp.plugins.GoogleGeocoder.prototype": {
        addMarkerTooltip: "Reset Marker"
    },
	"gxp.plugins.DynamicGeocoder.prototype": {
        addMarkerTooltip: "Reset Marker",
        emptyText: "Geocoder..."
    },
	"gxp.plugins.ReverseGeocoder.prototype": {
        buttonText: "Address",
        emptyText: "Address...",
		errorMsg: "No address found",
		waitMsg: "Wait please...",
		addressTitle: "Address found"
    },
	"gxp.form.WFSSearchComboBox.prototype": {
		emptyText:"Search",
		loadingText: "Searching"
	},
	"gxp.form.ContextSwitcher.prototype":{
		switchActionTip : "Switch Mappa",
		switchSaveAlert: "All unsaved data will be lost.",
		switchConfirmationText : "Are You sure to change map?"

	},
	"gxp.form.LanguageSwitcher.prototype":{
		switchActionTip : "Switch Language",
		switchConfirmationText : "Are you sure to change Language?"//Are you sure to change Language? All unsaved data will be lost
	},
	
	"gxp.plugins.MarkerEditor.prototype":{
		markerName:'Markers',
		copyText:'Copy the text below and paste it in  the "Import Markers" window in a second time ...',
		pasteText:'Paste the text in the text area and click on imoport.',
		addToTheMapText:'Add To the Map',
		updateText: 'Update',
		resetText:'Reset',
		removeText:'Remove',
		compositeFieldTitle:  'Title',
		compositeFieldLabel: 'Label',
		coordinatesText: 'Coordinates',
		contentText: 'Content',
		gridColTitle: 'Title',
		gridColLabel: 'Label',
		gridColLat: 'Lat',
		gridColLon: 'Lon',
		gridColContent: 'Content',	
		exportBtn:  'Export Markers',
		importBtn: 'Import Markers',
		removeAllBnt: 'Remove All',
		markerChooserTitle:'Choose a marker',
		useThisMarkerText:'Use this Marker',
		selectMarkerText:'Select Marker',
		insertImageText:'Insert Image',
		imageUrlText:'Image URL',
		importGeoJsonText:'Import GeoJson',
		errorText:"Error",
		notWellFormedText:"The Text you added is not well formed. Please check it"
	},
	
	"gxp.widgets.form.CoordinatePicker.prototype":{
	    fieldLabel: 'Coordinates',
		pointSelectionButtionTip: 'Click to enable point selection',
		latitudeEmptyText: 'Latitude',
		longitudeEmptyText: 'Longitude'
	},
	
	"gxp.plugins.ImportExport.prototype":{
		saveMapText: "Export Map",
		loadMapText: "Import Map",
		uploadButtonText: 'Upload',
		uploadWaitMsg: 'Uploading your context file...',
		uploadErrorTitle: 'File Upload Error',
		uploadEmptyText: 'Select a Map context file',
		uploadWinTitle: 'File Upload Form',		
		saveErrorText: "Trouble saving: ",
		mainLoadingMask: "Please wait, loading..."
    },
	
	"gxp.plugins.AddLayer.prototype":{
		waitMsg: "Please Wait ...",
		capabilitiesFailureMsg: " The layer cannot be added to the map"
    },
    
    "gxp.plugins.Geolocate.prototype":{
        geolocateMenuText: "Geolocate",
        geolocateTooltip: "Locate my position",
        trackMenuText: "Track Position",
        trackTooltip: "Track my position",
        waitMsg: "Locating...",
        errorMsg: "Geolocation is not supported by your browser"
    }


});
