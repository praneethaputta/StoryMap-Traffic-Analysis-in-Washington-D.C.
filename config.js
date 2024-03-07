var config = {
    style: 'mapbox://styles/prane/clb3ztexy000314kyxkor6i2s',
    accessToken: 'pk.eyJ1IjoicHJhbmUiLCJhIjoiY2xiNTlsMmpmMDRmNjNubGFvNzN5dXN2dyJ9.RnAAiKm_sa_bYMTTvpXNig',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'Why do people end up wasting a lot of time stuck in traffic in Washington D.C?',
    subtitle: 'A Story Emphasising the Traffic and Transportation Crisis In the Nations Capital and its adverse effects',
    byline: 'By Praneetha',
    footer: ' <p style="color:orange; font-weight:bold"> Map Sources: </p> Washington D.C. Administrative Boundary, River Boundary, Road Network <a href="https://www.openstreetmap.org/#map=19/38.88605/-76.96988" target="https://www.openstreetmap.org/#map=19/38.88605/-76.96988">Open Street Map</a>  <br> Census Data, Modes of Transportation, Economic Status, Household Income, Washington D.C. Census Designated Metropolitan Area Boundary, Modes of transport to work, Travel time to work <a href="https://data.census.gov/table" target="https://data.census.gov/table">United States Census Bureau - ACS Data </a> <br> Affordable housing, Metro routes, Metro-bus routes, Land use zoning, Traffic Volumes, Accident Prone Areas <a href="https://opendata.dc.gov/" target="https://opendata.dc.gov/"> Open Data DC </a>. </p> <br> <p style="color:orange; font-weight:bold"> Template source: </p> <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> </p> <br> <p style="color:orange; font-weight:bold"> Data and Research Sources: </p> <a href="https://getawaytips.azcentral.com/the-effects-of-traffic-congestion-12304680.html" target="https://getawaytips.azcentral.com/the-effects-of-traffic-congestion-12304680.html"> The Effects of Traffic Congestion | Getaway USA </a> </p><a href="https://nypost.com/2022/04/22/traffic-is-now-the-worst-in-these-5-us-cities-is-yours-here/" target="https://nypost.com/2022/04/22/traffic-is-now-the-worst-in-these-5-us-cities-is-yours-here/"> Traffic is now the worst in these 5 US cities — is yours here?. </a> </p> <a href="https://storymaps.esri.com/stories/2017/dc-transit/index.html" target="https://storymaps.esri.com/stories/2017/dc-transit/index.html">End of the Line: Half a million people commute to Washington, D.C </a> </p> <a href="https://en.wikipedia.org/wiki/Transportation_in_Washington,_D.C." target="https://en.wikipedia.org/wiki/Transportation_in_Washington,_D.C.">Transportation in Washington,D.C. </a>',
    chapters: [
        {
            id: 'chapterzero',
            alignment: 'right',
            hidden: false,
            title: 'Introduction',
            image: 'images/image21.jpg',
            description:'<p style="color:grey; font-weight:italic"> Source <a href="https://bostonglobe-prod.cdn.arcpublishing.com/resizer/_2u1acl8p-mn1RTbjDaIAa87zS8=/960x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/R2KUJXDZJEI6PN3IU2FBL75QII.jpg" target="https://bostonglobe-prod.cdn.arcpublishing.com/resizer/_2u1acl8p-mn1RTbjDaIAa87zS8=/960x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/R2KUJXDZJEI6PN3IU2FBL75QII.jpg">Illustration Depicting Traffic Congestion in cities</a> </p> "It is a waste of time. Washington is No. 3 in traffic congestion" - The Washington Post, Dana Hedgpeth, August 2022 </p> Millions of people deal with traffic congestion daily. The roadways leading into and out of most major cities can become gridlocked due to an accident, road construction, or simply a high number of cars on the road. Traffic congestion can affect drivers, the environment, health, and the economy. </p> A person living in a large city or any area with many commuters on the road is probably familiar with the effects of traffic congestion. What most people need to realize is the extent of the effects heavy traffic congestion can have. Stopping and starting in traffic consumes more petrol than traveling at a constant speed on the open roadway. This increase in fuel usage costs commuters more money for fuel and contributes to the amount of pollution emitted by vehicles. These pollutants pollute the air and contribute to global warming. In addition, congestion increases travel costs and reduce accessibility by increasing travel times. Congestion exposure has substantial adverse effects, such as increased noise pollution, driver stress, decreased mental satisfaction, the citys economic growth, and increased passenger time pressure. </p> Washington, D.C., tops the list for the highest traffic increase in recent times. Traffic in the city was 12.5% higher in March 2022 than in July. In one month, from February to March 2022 alone, traffic in D.C. jumped 16.2%. - NEW YORK POST, 2022 ',
            location: {
                center: [-82.77029, 41.53830],
                zoom: 3.1,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer:'',
                     opacity: 1,
                     duration: 1000
                 }
            ],
            onChapterExit: [
                 {
                     layer:'',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'chapterone',
            alignment: 'center',
            hidden: false,
            title: 'Washington D.C. in the Past',
            image: '',
            description: ' </p> <img width="" height="" src="images/image2.jpg"> <p style="color:grey; font-weight:italic"> Source <a href="https://www.loc.gov/resource/g3850.ct004195/?r=-0.257,0.169,1.435,0.625,0" target="https://www.loc.gov/resource/g3850.ct004195/?r=-0.257,0.169,1.435,0.625,0">Plan of the city of Washington, in the territory of Columbia, ceded by the States of Virginia and Maryland to the United States of America, and by them established as the seat of their government after the year 1800. </a> </p> Washington, DC, was founded on July 16, 1790, and is distinct from other American cities as it was established as the nations capital by the United States Constitution. The federal territory was named after the explorer Christopher Columbus, while the national city was named after George Washington. It is situated on the east bank of the Potomac River, which forms its southwestern and southern borders with the state of Virginia, and it shares a land border with the state of Maryland on all other sides. </p> Even before coming of age, D.C. was nearly destroyed. During the War of 1812 against Great Britain, enemy forces invaded the city. They burned much of it to the ground, including the newly completed White House, the Capitol, and the Library of Congress. After the devastation, the city remained small, especially in terms of permanent residents. Soon it would become smaller in physical size as well. </p> The town only increased in size as a result of the Civil War. Post-war, Washington experienced substantial expansion, eventually absorbing nearby Georgetown and surrounding rural areas beyond original plans. Today, it remains a vibrant and culturally diverse city with international cultures and African American heritage.',
            location: {
                center: [-77.03397, 38.89677],
                zoom: 10,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer:'',
                     opacity: 1,
                     duration: 1000
                 }
           ],
            onChapterExit: [
                 {
                     layer:'',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'chaptertwo',
            alignment: 'right',
            hidden: false,
            title: 'Present Day Washington D.C',
            image: '',
            description: 'Washington, DC, was intended to be the federal governments focal point and housing the Federal Government apparatus within the city. However, the founders of the United States did not envision a large, permanent, and compelling Federal Government. As a result, the cities design did not permanently allow many residents. There are 131 neighborhoods in the city, which are organized into quadrants centered around the Capitol. It has a population of 700,000 residents (approx.) according to the 2020 census, making it the 23rd most populated city in the United States.',
            location: {
                center: [-76.93910, 38.89443],
                zoom: 10.5,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'boundary',
                     opacity: 1,
                     duration: 100
                }                  
            ],
            onChapterExit: [
                {
                     layer: 'boundary',
                     opacity: 0
                }               
            ]
        },
        {
            id: 'chaptertwoone',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '</p> D.C. was planned around the confluence of two rivers, the Potomac and the Anacostia. While the more recognized Potomac defines its organic southwestern edge with Virginia, the Anacostia cuts through the city, dividing its southeastern quadrant from the rest, which can be accessed only through a few bridges. The west side of the Anacostia River is defined by a classical grid plan, crisscrossed with diagonal avenues whose intersections mark the locations of civic buildings and public spaces. The east side is less formally organized, with a terrain of hills that fragment its street grid and a bucolic riverfront compared to the industrialized western bank. The west is dominated by D.C.s practical and symbolic role as the nations capital. At the same time, the predominantly African-American east side is home to more native D.C. residents than any other neighborhood. Today, the west is high income while the east has the lowest income levels in the district.',
            location: {
                center: [-76.93910, 38.89443],
                zoom: 10.5,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'river',
                     opacity: 1,
                     duration: 500
                }                    
            ],
            onChapterExit: [
                {
                     layer: 'river',
                     opacity: 0
                }               
            ]
        },
        {
            id: 'chapterthree',
            alignment: 'right',
            hidden: false,
            title: 'DEMOGRAPHICS - CENSUS DATA',
            image: '',
            description: '</p> <img width="" height="" src="images/image3.jpg"> <br> <p style="color:grey; font-weight:italic"> Source <a href="https://opdatahub.dc.gov/" target="https://opdatahub.dc.gov/">District of columbia population profile</a> </p> <img width="" height="" src="images/image22.jpg"> <br> <p style="color:grey; font-weight:italic"> Source <a href="https://opdatahub.dc.gov/" target="https://opdatahub.dc.gov/">District of columbia population profile</a> </p> There are a total of 4,079 adults residing in the city above the age group of 18. </p> <img width="" height="" src="images/imagea.jpg">',
            location: {
                center: [-76.93910, 38.89443],
                zoom: 10.65,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'census',
                     opacity: 1,
                     duration: 800
                }                   
            ],
            onChapterExit: [
                {
                     layer: 'census',
                     opacity: 0
                }               
            ]
        },
        {
            id: 'chapterfour',
            alignment: 'right',
            hidden: false,
            title: 'Racial Disparities - White Population Only',
            image: '',
            description: 'Washington D.C. downtown and Western bank of Anacostia river are highly dominant with white population and are very scarce in the Eastern bank of Anacostia River.  Of the total 4,079 adults in the city, 2,535 belong to the white population.</p> <img width="" height="" src="images/imageb.jpg">',
            location: {
                center: [-76.93910, 38.89443],
                zoom: 10.65,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'censuswhite',
                     opacity: 1,
                     duration: 600
                }                    
            ],
            onChapterExit: [
                {
                     layer: 'censuswhite',
                     opacity: 0
                }               
            ]
        },
        {
            id: 'chapterfourone',
            alignment: 'right',
            hidden: false,
            title: 'Racial Disparities - African-American Population only',
            image: '',
            description: 'In 2011, the District of Columbia black population slipped below 50 percent for the first time in over 50 yearsThe District was a majority-black district from the late 1950s through 2011. The District of Columbia has had a significant African-American population since the Districts creation; several neighborhoods are noted for their contributions to black history and culture. </p> Like numerous other border and northern cities in the first half of the 20th century, the District of Columbia received many black migrants from the South in the Great Migration. African Americans moved north for better education and job opportunities and to escape legal segregation and lynchings. Government growth during World War II also provided economic opportunities for African Americans. </p> In the postwar era, the percentage of African Americans in the District steadily increased as its total population declined due to suburbanization, supported by federal highway construction and white flight. The black population included a solid lower, middle, and upper class. </p> Of the 4,079 adults in the city, 2,032 of them are Afro-American population. The Afro-American population is located away from the cities downtown. Most of them live in the Anacostia area, which lacks proper connectivity to the other side of the city, access to work, and other facilities. </p> <img width="" height="" src="images/imagec.jpg">',
            location: {
                center: [-76.93910, 38.89443],
                zoom: 10.65,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'censusblack',
                     opacity: 1,
                     duration: 800
                }                    
            ],
            onChapterExit: [
                {
                     layer: 'censusblack',
                     opacity: 0
                }               
            ]
        },
        {
            id: 'chapterfive',
            alignment: 'right',
            hidden: false,
            title: 'Road Network - Anacostia to Downtown',
            image: '',
            description: 'Access from the Anacostia area to the rest of the city is restricted because the river flow between the city and the limited road network system is a primary cause of traffic congestion.',
            location: {
                center: [-76.99394, 38.87855],
                zoom: 13,
                pitch: 23,
                bearing: -50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
               {
                     layer: '',
                     opacity: 0,
                     duration: 600
               }                         
            ],
            onChapterExit: [
                {
                     layer: '',
                     opacity: 0
                }                              
            ]
        },
        {
            id: 'chaptersix',
            alignment: 'left',
            hidden: false,
            title: 'Economic Status',
            image: '',
            description: ' The poverty Rate in D.C. as per 2020 ACS Census tract is 15.5%. There are nearly 500 households with an average of 3 members per family which fall below the povery level. Most of the household below the poverty level are located in the Anacostia area. </p> <img width="" height="" src="images/imaged.jpg"> ',
            location: {
                center: [-77.13686, 38.89387],
                zoom: 10.65,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'belowpvline',
                     opacity: 1,
                     duration: 800
                }                             
            ],
            onChapterExit: [
                {
                     layer: 'belowpvline',
                     opacity: 0
                }                              
            ]
        },
        {
            id: 'chaptereight',
            alignment: 'left',
            hidden: false,
            title: 'House Hold Income',
            image: '',
            description: 'The average income of a low-income household is $50,000, while the average income of a high-income household is $150,000 and above. Most high-income residents are in the Western end of the Anacostia River (i.e.) the Downtown of the city.  </p> <img width="" height="" src="images/imagej.jpg">',
            location: {
                center: [-77.13686, 38.89387],
                zoom: 10.65,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'householdincome',
                     opacity: 1,
                     duration: 800
                }                             
            ],
            onChapterExit: [
                {
                     layer: 'householdincome',
                     opacity: 0
                }                              
            ]
        }, 
        {
            id: 'chapterseven',
            alignment: 'center',
            hidden: false,
            title: 'Affordable Housing',
            image: '',
            description: '</p> <img width="" height="" src="images/image25.png"> <br> <p style="color:grey; font-weight:italic"> Map Illustratinfg affordable housing in Washington D.C. | Made with Open DC Data and QGIS </p> Due to the high value of housing, people prefer to live outside the administrative boundary, which is more affordable. They are commuting in and out of D.C., increasing the traffic density. ',
            location: {
                center: [-77.13686, 38.89387],
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: '',
                     opacity: 0,
                     duration: 1000
                }                             
            ],
            onChapterExit: [
                {
                     layer: '',
                     opacity: 0
                }                              
            ]
        },  
        {
            id: 'chapterten',
            alignment: 'right',
            hidden: false,
            title: 'Washington D.C. Census Designated Metropolitan Area',
            image: '',
            description: 'The national challenge of connecting the dots between affordable housing and economic opportunity is growing. As settlements grew along the transit corridors, their travel times grew steadily. The bottom line is that far too many people are attempting to enter, exit, and move around Washington, DC. </p> The Washington Metropolitan Area, which includes all of the suburbs of Maryland, Virginia, and even some parts of Eastern West Virginia, now has several million residents, many of whom commute daily from their homes to Washington and back to their homes. Even the Federal Government has expanded far beyond the borders of Washington because there is no longer enough space.',
            location: {
                center: [-77.007, 38.858],
                zoom: 7.4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'metroarea',
                     opacity: 1,
                     duration: 800
                }                             
            ],
            onChapterExit: [
                {
                     layer: 'metroarea',
                     opacity: 0
                }                              
            ]
        },           
        {
            id: 'chaptereleven',
            alignment: 'right',
            hidden: false,
            title: 'Transportation - Public Transport - Expansion of Metro Rail Routes outside the city',
            image: '',
            description: 'Although the government established a mass transit system that uses trains to transport citizens into and out of the city and enables people to park their automobiles outside the city and reach Washington, D.C., using a shared train system, the intervention has not had much of an impact, this is because most people prefer driving their cars, and the train system cannot reach several designated working zones around Washington, D.C. </p> Nevertheless, as much as public transit interconnects people and places, the personal experience of relying on an overburdened transportation system can be painful. For example, in Washington, D.C., rising home values are pushing people to the ends of train and bus lines in pursuit of affordable housing. More than ever, these commuters rely on public transit. However, local transit operators need help keeping their systems safe and reliable.  </p> <img width="" height="" src="images/imagei.jpg"> ',
            location: {
                center: [-76.86014, 38.90849],
                zoom: 9.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'metro',
                     opacity: 1,
                     duration: 500
                },                           
            ],
            onChapterExit: [
                {
                     layer: 'metro',
                     opacity: 0
                }                              
            ]
        },
        {
            id: 'chapterelevenone',
            alignment: 'right',
            hidden: false,
            title: 'Transportation - Public Transport - Expansion of Metro Bus Routes outside the city',
            image: '',
            description: 'Public debate, usually dominated by discussions of budgets and infrastructure, can sometimes overlook an equally important factor of public transit: the people who depend upon buses and subways daily. The delays and higher costs that result from a poorly functioning system, or a system undergoing emergency repairs, weigh most heavily on transit-dependent riders. These individuals are often working-class or low-income and have few or no alternative transportation options. Moreover, they tend to have little voice in public decision-making. ',
            location: {
                center: [-76.86014, 38.90849],
                zoom: 9.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'metrobus',
                     opacity: 1,
                     duration: 200
                }                             
            ],
            onChapterExit: [
                {
                     layer: 'metrobus',
                     opacity: 0
                }                              
            ]
        },
        {
            id: 'chapterelevenonee',
            alignment: 'center',
            hidden: false,
            title: 'Employment Opportunities',
            image: '',
            description: '</p> <img width="" height="" src="images/image26.jpg"> <br> <p style="color:grey; font-weight:italic"> Source <a href="https://storymaps.esri.com/stories/2017/dc-transit/index.html" target="https://storymaps.esri.com/stories/2017/dc-transit/index.html"> Employment Opportunities in and around Washington D.C.</a> </p> Besides main thoroughfares and a few pockets of new development, job counts drop off exponentially at increasing distances from the urban core. Public transit is essential to bridge the divide between these jobs and affordable housing.. </p> Communities east of the Anacostia River have historically faced less investment from the city. The road network is primarily built around automobiles, and geographic challenges like steep hills and highways mean that getting around can be inconvenient and unsafe, especially for people walking, scooting, or bicycling.',
            location: {
                center: [-77.02816, 38.88928],
                zoom: 16,
                pitch: 56.60,
                bearing: 63.91,
                speed: 2, 
                curve: 1, 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 1,
                    duration: 100
                }                                             
            ],
            onChapterExit: [
                {
                    layer: '',
                    opacity: 0
                }                                              
            ]
        },        
        {
            id: 'chapterninee',
            alignment: 'left',
            hidden: false,
            title: 'Land Use Zoning',
            image: '',
            description: 'Most of the Commercial, Administration, Recreational and Employment zones are located in proximity to downtown. </p> <img width="" height="" src="images/imagel.jpg">',
            location: {
                center: [-76.98041, 38.87443],
                zoom: 15,
                pitch: 68,
                bearing: -80,
 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            speed: 20, 
            curve: 1,
            onChapterEnter: [
                {
                    layer: 'landusee',
                    opacity: 1,
                    duration: 500
                }                    
            ],
            onChapterExit: [
                {
                    layer: 'landusee',
                    opacity: 0
                }                  
            ]
        },
        {
            id: 'chapterelevenone',
            alignment: 'center',
            hidden: false,
            title: 'Road Network',
            image: '',
            description: 'The regions extensive highway and road network form the backbone of its transportation system. Millions of people travel by car or truck daily to access jobs, schools, medical care, shopping, entertainment, and recreational opportunities. Roads also deliver most goods to the regions homes, schools, businesses, and stores. </p> Communities east of the Anacostia River have historically faced less investment from the city. The road network is primarily built around automobiles, and geographic challenges like steep hills and highways mean that getting around can be inconvenient and unsafe, especially for people walking, scooting, or bicycling. </p> <img width="" height="" src="images/image20.png"> <p style="color:grey; font-weight:italic"> Map Illustrating Road Network in Washington D.C. | Made with Open Street Map Data and QGIS </p>',
            location: {
                center: [-76.95224, 38.89460],
                zoom: 7,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },                    
        {
            id: 'chaptertwelve',
            alignment: 'right',
            hidden: false,
            title: 'Mode of Transport - Private Vehicle ',
            image: '',
            description: 'Washington, D.C., has several different modes of transportation available for use. Commuters have a significant influence on travel patterns, with only 28% of people employed in Washington, D.C. commuting from within the city, whereas 33.5% commute from the nearby Maryland suburbs, 22.7% from Northern Virginia, and the rest from Washington, D.C.s outlying suburbs. </p> There is heavy vehicle congestion from the large percentage of the population who chooses to drive. This results in minimal parking, especially in the cities downtown areas. Corporations have attempted to solve the cities parking problem, but there has yet to be much success. Parking restrictions are strictly enforced, and the complicated parking hours posted on signs can be confusing. In addition, environmentalists question the free parking spaces given to thousands of Congressional employees, discouraging them from using public transportation. </p> Private vehicles are the most used mode of transportation to work by both the residents and commuters. </p> <img width="" height="" src="images/imagee.jpg">',
            location: {
                center: [-76.95224, 38.89460],
                zoom: 10.67,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'privatevehicles',
                     opacity: 1,
                     duration: 400
                }                             
            ],
            onChapterExit: [
                {
                     layer: 'privatevehicles',
                     opacity: 0
                }                              
            ]
        },
        {
            id: 'chapterthirteen',
            alignment: 'right',
            hidden: false,
            title: 'Mode of Transport - Public Transport',
            image: '',
            description: 'More than 1000 people are using various means of public transport to commute to their work zones everyday. The Washington area is served by the Washington Metro rapid transit system, operated by the Washington Metropolitan Area Transit Authority (WMATA). The Metro opened in 1976 and has 97 stations across six lines covering 129 miles (208 km) of the track. When measured by ridership, the Washington Metro is the second-largest rapid rail system in the United States and the fifth-largest in North America. </p>  The challenge of funding and maintaining public transit is a national dilemma. There is no one-size-fits-all policy. However, there are development and community engagement methods that emphasize giving people multiple and overlapping transit options.  </p> <img width="" height="" src="images/imagef.jpg">',
            location: {
                center: [-76.95224, 38.89460],
                zoom: 10.67,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'publictransport',
                     opacity: 1,
                     duration: 500
                }                             
            ],
            onChapterExit: [
                {
                     layer: 'publictransport',
                     opacity: 0
                }                              
            ]
        },
        {
            id: 'chapterforteen',
            alignment: 'right',
            hidden: false,
            title: 'Mode of Transport - Bicycle',
            image: '',
            description: ' There is a network of 45 miles (72 km) of dedicated bicycle lanes around Washington, D.C., and there are 1,300 bicycle racks installed on sidewalks all over the city. An estimated 3.3% of the Districts residents biked to work at least one day during 2010, and by 2008 the city had the sixth-highest percentage of bike commuters in the United States. </p> Residents living near the administrative and downtown areas use bicycles to reach their work areas, which is the least used mode compared to others. </p> <img width="" height="" src="images/imageh.jpg">',
            location: {
                center: [-76.95224, 38.89460],
                zoom: 10.67,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'bike',
                     opacity: 1,
                     duration: 400
                }                             
            ],
            onChapterExit: [
                {
                     layer: 'bike',
                     opacity: 0
                }                              
            ]
        },
        {
            id: 'chapterfifteen',
            alignment: 'right',
            hidden: false,
            title: 'Mode of Transport - By Walk',
            image: '',
            description: 'Washington D.C. has a lot of pedestrian-friendly pathways to encourage more people living near the work districts to walk rather than use vehicles to cut down the traffic volumes. </p> <img width="" height="" src="images/imageg.jpg">',
            location: {
                center: [-76.95224, 38.89460],
                zoom: 10.67,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'walk',
                     opacity: 1,
                     duration: 400
                }                             
            ],
            onChapterExit: [
                {
                     layer: 'walk',
                     opacity: 0
                }                              
            ]
        },
        {
            id: 'chaptersixteen',
            alignment: 'right',
            hidden: false,
            title: 'Travel Time To Work - More than 90 Minutes',
            image: '',
            description: '</p> <img width="" height="" src="images/imagek.jpg">',
            location: {
                center: [-76.95224, 38.89460],
                zoom: 10.67,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'traveltime',
                     opacity: 1,
                     duration: 800
                }                             
            ],
            onChapterExit: [
                {
                     layer: 'traveltime',
                     opacity: 0
                }                              
            ]
        }, 
        {
            id: 'chapterseventeen',
            alignment: 'left',
            hidden: false,
            title: 'Traffic Volume - 2019 (Pre-COVID)',
            image: '',
            description: 'The traffic volume is intense throughout the city except for a few residential areas',
            location: {
                center: [-77.12577, 38.89365],
                zoom: 10.67,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'trafficvolume2019',
                     opacity: 1,
                     duration: 700
                }                             
            ],
            onChapterExit: [
                {
                     layer: 'trafficvolume2019',
                     opacity: 0
                }                              
            ]
        },
        {
            id: 'chaptereighteen',
            alignment: 'left',
            hidden: false,
            title: 'Traffic Volume - 2020 (Post-COVID)',
            image: '',
            description: 'The traffic volume in 2020 reduced drastically due to COVID-19 Isolation and can be observed only in the administrative areas and major transportation routes.',
            location: {
                center: [-77.12577, 38.89365],
                zoom: 10.67,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'trafficvolume2020',
                     opacity: 1,
                     duration: 800
                }                             
            ],
            onChapterExit: [
                {
                     layer: 'trafficvolume2020',
                     opacity: 0
                }                              
            ]
        },
        {
            id: 'chapterninteen',
            alignment: 'left',
            hidden: false,
            title: 'Accident Prone Areas',
            image: '',
            description: 'Most city accidents occur in the Dupont Circle area due to traffic congestion, which can directly impact the safety of the residents health.',
            location: {
                center: [-77.12577, 38.89365],
                zoom: 10.67,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'crashdata',
                     opacity: 1,
                     duration: 600
                }                             
            ],
            onChapterExit: [
                {
                     layer: 'crashdata',
                     opacity: 0
                }                              
            ]
        }, 
        {
            id: 'chaptertwenty',
            alignment: 'left',
            hidden: false,
            title: 'Traffic Fatalities and Injuries',
            image: '',
            description: '</p> <img width="" height="" src="images/image5.jpg"> </p> <img width="" height="" src="images/image6.jpg"> </p> <img width="" height="" src="images/image7.jpg"> <br> <p style="color:grey; font-weight:italic"> Source <a href="https://www.arcgis.com/apps/dashboards/a2f1cca5159e4c6eae197895d2e08336" target="https://www.arcgis.com/apps/dashboards/a2f1cca5159e4c6eae197895d2e08336">Charts illustrating Accident Fatalities</a>',
            location: {
                center: [-77.12577, 38.89365],
                zoom: 10.67,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'crashdata',
                     opacity: 1,
                     duration: 200
                }                             
            ],
            onChapterExit: [
                {
                     layer: 'crashdata',
                     opacity: 0
                }                              
            ]
        },
        {
            id: 'finalchapterr',
            alignment: 'center',
            hidden: false,
            title: 'Conclusion',
            image: '',
            description: 'Congestion is a persistent problem for cities in the United States and worldwide, and it is getting worse very rapidly. The main themes that have aggravated urban congestion in recent years are economic growth, rising urbanization, ride-hailing services and e-commerce, underinvestment in infrastructure, and uneven results from various policies and initiatives. </p> Unfortunately, D.C. has half a million commuters and some of the countries most extended commute times, according to NPR. As a result, D.C. drivers experienced an annual delay of 42 hours. Those delays led to excess fuel consumption. The yearly Delay per Auto Commuter is nearly 42 hours, and extra Fuel per Auto Commuter is estimated to be 16 gallons. </p> Nevertheless, as much as public transit interconnects people and places, the personal experience of relying on an overburdened transportation system can be painful. For example, in Washington, D.C., rising home values are pushing people to the ends of train and bus lines in pursuit of affordable housing. More than ever, these commuters rely on public transit. However, local transit operators need help keeping their systems safe and reliable. </p> The cities employment opportunities will double by the end of the next decade, and it is high time for responsible government bodies and the general public to act accordingly to make the city a safe, environmentally friendly, and sustainable place.',
            location: {
                center: [-77.02816, 38.88928],
                zoom: 16,
                pitch: 60,
                bearing: 63.91,
                speed: 2, 
                curve: 1, 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }                                                                                                                                                                         
    ]
};
