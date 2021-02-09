function initialize() {
    //var myLatlng = new sogou.maps.LatLng(39.981320, 116.320247);
    var myOptions = {
        zoom: 15,
        mapTypeId: sogou.maps.MapTypeId.ROADMAP
    }
    var map = new sogou.maps.Map(document.getElementById("map_canvas"), myOptions);
    var marker;

    function callback(a) {//回调函数 标点
        if (a.status == 'ok') {
            var geometry = a.data[0];
            marker = new sogou.maps.Marker({
                map: map,
                title: '上海钰隽贸易有限公司',
                position: geometry.location
            });
            map.setCenter(marker.getPosition());

            var contentString = '地址：上海市静安区永和路118弄东方环球企业中心43号1101室';
            var infowindow = new sogou.maps.InfoWindow({
                content: contentString
            });
            sogou.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });
        }
    }
    var request = {
        address: {
            addr: '上海市静安区永和路118弄东方环球企业中心43号', city: '上海'
        }
    }
    var geo = new sogou.maps.Geocoder();
    geo.geocode(request, callback);
};


