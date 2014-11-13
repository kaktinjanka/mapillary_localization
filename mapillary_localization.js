(function() {

  angular.module("mapapp").config(function($translateProvider) {
    $translateProvider.translations("en", {
      footer: {
        getApp: "Get the Mapillary App",
        on: "on",
        directAndroid: "Direct Android .apk link",
        manifesto: "Manifesto",
        about: "About",
        blog: "Blog",
        howItWorks: "How It Works",
        capture: "Capture Instructions",
        using: "Using the App",
        positions: "Open Positions",
        legal: "Legal",
        terms: "Terms and Conditions",
        privacy: "Privacy Policy",
        cookies: "Cookies",
        more: "More",
        business: "Business",
        developers: "Developers",
        integrations: "Integrations",
        embed: "Embed",
        latestUploads: "Latest Uploads",
        report: "Report Issues",
        follow: "Follow"
      },
      landing: {
        more: "More",
        photos: "photos",
        meters: "meters"
      },
      landingBusiness: {
        title: "Mapillary for Business",
        use: "Use Mapillary photos",
        service: "Sign up for a commercial API plan in order to use Mapillary photos and data in your service.",
        create: "Create projects, control access.",
        "private": "Business users can create private projects and control access for a fully private version of Mapillary.",
        integrate: "Integrate photo views",
        gis: "Use our APIs or widget to integrate a complete Mapillary viewer in your application or in your GIS system.",
        learn: "Learn more about our business plans."
      },
      landingHow: {
        one: "1. Get the Mapillary app",
        oneAvailble: "Available for",
        one_from: "and from",
        two: "2. Go out and capture sequences",
        three: "3. Browse, explore, and share places"
      },
      landingWhatyoucan: {
        title: "What you can do with Mapillary",
        section1Map: "Map a place, a town, or someplace new",
        section1Missing: "If your town is missing street view photos, you can add it yourself!",
        section1Examples: "See some great examples at",
        section1And: "and",
        section2Add: "Add roads not on the map, like",
        section2RoadMalaysia: "this road in Malaysia.",
        section2Future: "Record a place for the future to show what it looked like at a point in time, like this",
        section2Coastal: "coastal town.",
        section2NoCars: "Map an area that cannot be reached with street view cars, like the lovely",
        section2_venice: "Venice Beach canals,",
        section2Unmapped: "or the unmapped",
        section2Fishing: "Venice Fishing Pier.",
        section2Share: "Share and show",
        section2Anyone: "Share a place on Mapillary to anyone. Send them a link and it will look good on both mobile and web.",
        section2Embed: "You can embed a Mapillary viewer on any website with",
        section2Widget: "our widget.",
        section2Path: "With this you can show a specific path or route or leave if open for viewers to explore.",
        section2See: "See what you can do on",
        section2Example: "example page.",
        section3Track: "Track a place over time",
        section3Filter: "Using the filter functions on Mapillary, you can track a place over time.",
        section3Older: "Compare recent pictures to older. Show only summer, only winter, and much more.",
        section3Places: "If you have places and photos that you do don't want to share publicly, you can have private projects. Take a look at our",
        section3Business: "business plans."
      },
      landingSearch: {
        header: "Crowdsourced Street Level Photos.",
        search: "Search",
        or: "or",
        anywhere: "Search for places and roads anywhere...",
        contribute: "contribute your own"
      },
      navbar: {
        howItWorks: "How It Works",
        explore: "Explore",
        business: "Business",
        developers: "Developers",
        projects: "Projects",
        me: "Me",
        myProfile: "My Profile",
        manualUploads: "Manual Uploads",
        settings: "Settings",
        signOut: "Sign Out",
        or: "or",
        logIn: "Log In",
        signUp: "Sign Up"
      },
      explore: {
        title: "Explore",
        top5: "Top 5 mappers",
        lastWeek: "Last week",
        thisWeek: "This week",
        user: "user",
        noOfImg: "Number of images",
        toplistsTitle: "Toplists by Region/Country",
        toplistsParagraph: "Browse and explore top contributors by region and/or country.",
        latestUploads: "Latest Uploads"
      },
      profile: {
        uploads: "Uploads",
        connections: "Connections",
        editProfile: "Edit profile",
        uploadedImages: "uploaded images",
        metersMapped: "meters mapped",
        stillProcessing: "still processing",
        recentActivity: "Recent Activity"
      },
      manualUpload: {
        title: "Manually Upload Images",
        paragraph: "Upload images that belong together in one upload, as they will make up a",
        path: "path",
        chooseFiles: "Choose Files",
        tagsRequired: "The following EXIF tags are required:",
        thisImage: "This image",
        goodExample: "is a good example of a the required EXIF data, created by",
        seeAlso: "See also the post on",
        usingActionCamera: "using an action camera with Mapillary",
        sampleWorkflow: "for a sample workflow.",
        terms: "By uploading files you agree to the Mapillary",
        termsLink: "terms of service.",
        of: "of",
        imgUploaded: "images uploaded",
        addMoreImages: "Add more images",
        clearAllImages: "Clear all images",
        imageNotUploaded: "Image not uploaded",
        imageUploaded: "Image uploaded",
        clickToSeeInfo: "Click on image on map to see information about image",
        selectedFile: "Selected file",
        latitude: "Latitude:",
        longitude: "Longitude:",
        angle: "Angle",
        uploaded: "Uploaded",
        remove: "Remove",
        filesWithError: "Files with errors (These files will not be uploaded)",
        filename: "Filename",
        step1: "1. Upload the images to the server. Make sure all your files are green and uploaded.",
        step2: "2. Push your created sequence to Mapillary.",
        selectProject: "Select project (if leave blank in none)",
        pushToMapillary: "Push To Mapillary",
        thankYou: "Thank You!",
        filesUploaded: "Your files have been uploaded to Mapillary",
        check: "Check",
        myUploads: "My Uploads",
        addedSoon: "they will soon be added to the map",
        uploadMore: "Upload More"
      }
    });
    $translateProvider.translations("de", {
      search: {
        header: "Bilder für alle."
      },
      navbar: {
        button_lang_en: "Englisch",
        button_lang_de: "Deutsch"
      }
    });
    $translateProvider.preferredLanguage("en");
    return $translateProvider.useLocalStorage();
  });

}).call(this);
