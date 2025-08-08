var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Pacitan_1 = new ol.format.GeoJSON();
var features_Pacitan_1 = format_Pacitan_1.readFeatures(json_Pacitan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pacitan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pacitan_1.addFeatures(features_Pacitan_1);
var lyr_Pacitan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pacitan_1, 
                style: style_Pacitan_1,
                popuplayertitle: 'Pacitan',
                interactive: true,
    title: 'Pacitan<br />\
    <img src="styles/legend/Pacitan_1_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Pacitan_1_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Pacitan_1_2.png" /> Klaster 3<br />' });
var format_Ponorogo_2 = new ol.format.GeoJSON();
var features_Ponorogo_2 = format_Ponorogo_2.readFeatures(json_Ponorogo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ponorogo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ponorogo_2.addFeatures(features_Ponorogo_2);
var lyr_Ponorogo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ponorogo_2, 
                style: style_Ponorogo_2,
                popuplayertitle: 'Ponorogo',
                interactive: true,
    title: 'Ponorogo<br />\
    <img src="styles/legend/Ponorogo_2_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Ponorogo_2_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Ponorogo_2_2.png" /> Klaster 3<br />' });
var format_Trenggalek_3 = new ol.format.GeoJSON();
var features_Trenggalek_3 = format_Trenggalek_3.readFeatures(json_Trenggalek_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trenggalek_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trenggalek_3.addFeatures(features_Trenggalek_3);
var lyr_Trenggalek_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trenggalek_3, 
                style: style_Trenggalek_3,
                popuplayertitle: 'Trenggalek',
                interactive: true,
    title: 'Trenggalek<br />\
    <img src="styles/legend/Trenggalek_3_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Trenggalek_3_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Trenggalek_3_2.png" /> Klaster 3<br />' });
var format_Tulungagung_4 = new ol.format.GeoJSON();
var features_Tulungagung_4 = format_Tulungagung_4.readFeatures(json_Tulungagung_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tulungagung_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tulungagung_4.addFeatures(features_Tulungagung_4);
var lyr_Tulungagung_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tulungagung_4, 
                style: style_Tulungagung_4,
                popuplayertitle: 'Tulungagung',
                interactive: true,
    title: 'Tulungagung<br />\
    <img src="styles/legend/Tulungagung_4_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Tulungagung_4_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Tulungagung_4_2.png" /> Klaster 3<br />' });
var format_Blitar_5 = new ol.format.GeoJSON();
var features_Blitar_5 = format_Blitar_5.readFeatures(json_Blitar_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Blitar_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Blitar_5.addFeatures(features_Blitar_5);
var lyr_Blitar_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Blitar_5, 
                style: style_Blitar_5,
                popuplayertitle: 'Blitar',
                interactive: true,
    title: 'Blitar<br />\
    <img src="styles/legend/Blitar_5_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Blitar_5_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Blitar_5_2.png" /> Klaster 3<br />' });
var format_KotaBlitar_6 = new ol.format.GeoJSON();
var features_KotaBlitar_6 = format_KotaBlitar_6.readFeatures(json_KotaBlitar_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBlitar_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBlitar_6.addFeatures(features_KotaBlitar_6);
var lyr_KotaBlitar_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBlitar_6, 
                style: style_KotaBlitar_6,
                popuplayertitle: 'Kota Blitar',
                interactive: true,
    title: 'Kota Blitar<br />\
    <img src="styles/legend/KotaBlitar_6_0.png" /> Klaster 2<br />\
    <img src="styles/legend/KotaBlitar_6_1.png" /> Klaster 3<br />' });
var format_Kediri_7 = new ol.format.GeoJSON();
var features_Kediri_7 = format_Kediri_7.readFeatures(json_Kediri_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kediri_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kediri_7.addFeatures(features_Kediri_7);
var lyr_Kediri_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kediri_7, 
                style: style_Kediri_7,
                popuplayertitle: 'Kediri',
                interactive: true,
    title: 'Kediri<br />\
    <img src="styles/legend/Kediri_7_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Kediri_7_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Kediri_7_2.png" /> Klaster 3<br />' });
var format_KotaKediri_8 = new ol.format.GeoJSON();
var features_KotaKediri_8 = format_KotaKediri_8.readFeatures(json_KotaKediri_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaKediri_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaKediri_8.addFeatures(features_KotaKediri_8);
var lyr_KotaKediri_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaKediri_8, 
                style: style_KotaKediri_8,
                popuplayertitle: 'Kota Kediri',
                interactive: true,
    title: 'Kota Kediri<br />\
    <img src="styles/legend/KotaKediri_8_0.png" /> Klaster 1<br />\
    <img src="styles/legend/KotaKediri_8_1.png" /> Klaster 2<br />\
    <img src="styles/legend/KotaKediri_8_2.png" /> Klaster 3<br />' });
var format_Malang_9 = new ol.format.GeoJSON();
var features_Malang_9 = format_Malang_9.readFeatures(json_Malang_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Malang_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Malang_9.addFeatures(features_Malang_9);
var lyr_Malang_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Malang_9, 
                style: style_Malang_9,
                popuplayertitle: 'Malang',
                interactive: true,
    title: 'Malang<br />\
    <img src="styles/legend/Malang_9_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Malang_9_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Malang_9_2.png" /> Klaster 3<br />' });
var format_KotaMalang_10 = new ol.format.GeoJSON();
var features_KotaMalang_10 = format_KotaMalang_10.readFeatures(json_KotaMalang_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaMalang_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaMalang_10.addFeatures(features_KotaMalang_10);
var lyr_KotaMalang_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaMalang_10, 
                style: style_KotaMalang_10,
                popuplayertitle: 'Kota Malang',
                interactive: true,
    title: 'Kota Malang<br />\
    <img src="styles/legend/KotaMalang_10_0.png" /> Klaster 3<br />' });
var format_Lumajang_11 = new ol.format.GeoJSON();
var features_Lumajang_11 = format_Lumajang_11.readFeatures(json_Lumajang_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lumajang_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lumajang_11.addFeatures(features_Lumajang_11);
var lyr_Lumajang_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lumajang_11, 
                style: style_Lumajang_11,
                popuplayertitle: 'Lumajang',
                interactive: true,
    title: 'Lumajang<br />\
    <img src="styles/legend/Lumajang_11_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Lumajang_11_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Lumajang_11_2.png" /> Klaster 3<br />' });
var format_Jember_12 = new ol.format.GeoJSON();
var features_Jember_12 = format_Jember_12.readFeatures(json_Jember_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jember_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jember_12.addFeatures(features_Jember_12);
var lyr_Jember_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jember_12, 
                style: style_Jember_12,
                popuplayertitle: 'Jember',
                interactive: true,
    title: 'Jember<br />\
    <img src="styles/legend/Jember_12_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Jember_12_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Jember_12_2.png" /> Klaster 3<br />' });
var format_Banyuwangi_13 = new ol.format.GeoJSON();
var features_Banyuwangi_13 = format_Banyuwangi_13.readFeatures(json_Banyuwangi_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Banyuwangi_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Banyuwangi_13.addFeatures(features_Banyuwangi_13);
var lyr_Banyuwangi_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Banyuwangi_13, 
                style: style_Banyuwangi_13,
                popuplayertitle: 'Banyuwangi',
                interactive: true,
    title: 'Banyuwangi<br />\
    <img src="styles/legend/Banyuwangi_13_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Banyuwangi_13_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Banyuwangi_13_2.png" /> Klaster 3<br />' });
var format_Bondowoso_14 = new ol.format.GeoJSON();
var features_Bondowoso_14 = format_Bondowoso_14.readFeatures(json_Bondowoso_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bondowoso_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bondowoso_14.addFeatures(features_Bondowoso_14);
var lyr_Bondowoso_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bondowoso_14, 
                style: style_Bondowoso_14,
                popuplayertitle: 'Bondowoso',
                interactive: true,
    title: 'Bondowoso<br />\
    <img src="styles/legend/Bondowoso_14_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Bondowoso_14_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Bondowoso_14_2.png" /> Klaster 3<br />' });
var format_Situbondo_15 = new ol.format.GeoJSON();
var features_Situbondo_15 = format_Situbondo_15.readFeatures(json_Situbondo_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Situbondo_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Situbondo_15.addFeatures(features_Situbondo_15);
var lyr_Situbondo_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Situbondo_15, 
                style: style_Situbondo_15,
                popuplayertitle: 'Situbondo',
                interactive: true,
    title: 'Situbondo<br />\
    <img src="styles/legend/Situbondo_15_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Situbondo_15_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Situbondo_15_2.png" /> Klaster 3<br />' });
var format_Probolinggo_16 = new ol.format.GeoJSON();
var features_Probolinggo_16 = format_Probolinggo_16.readFeatures(json_Probolinggo_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Probolinggo_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Probolinggo_16.addFeatures(features_Probolinggo_16);
var lyr_Probolinggo_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Probolinggo_16, 
                style: style_Probolinggo_16,
                popuplayertitle: 'Probolinggo',
                interactive: true,
    title: 'Probolinggo<br />\
    <img src="styles/legend/Probolinggo_16_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Probolinggo_16_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Probolinggo_16_2.png" /> Klaster 3<br />' });
var format_KotaProbolinggo_17 = new ol.format.GeoJSON();
var features_KotaProbolinggo_17 = format_KotaProbolinggo_17.readFeatures(json_KotaProbolinggo_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaProbolinggo_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaProbolinggo_17.addFeatures(features_KotaProbolinggo_17);
var lyr_KotaProbolinggo_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaProbolinggo_17, 
                style: style_KotaProbolinggo_17,
                popuplayertitle: 'Kota Probolinggo',
                interactive: true,
    title: 'Kota Probolinggo<br />\
    <img src="styles/legend/KotaProbolinggo_17_0.png" /> Klaster 3<br />' });
var format_Pasuruan_18 = new ol.format.GeoJSON();
var features_Pasuruan_18 = format_Pasuruan_18.readFeatures(json_Pasuruan_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pasuruan_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pasuruan_18.addFeatures(features_Pasuruan_18);
var lyr_Pasuruan_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pasuruan_18, 
                style: style_Pasuruan_18,
                popuplayertitle: 'Pasuruan',
                interactive: true,
    title: 'Pasuruan<br />\
    <img src="styles/legend/Pasuruan_18_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Pasuruan_18_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Pasuruan_18_2.png" /> Klaster 3<br />' });
var format_KotaPasuruan_19 = new ol.format.GeoJSON();
var features_KotaPasuruan_19 = format_KotaPasuruan_19.readFeatures(json_KotaPasuruan_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaPasuruan_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaPasuruan_19.addFeatures(features_KotaPasuruan_19);
var lyr_KotaPasuruan_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaPasuruan_19, 
                style: style_KotaPasuruan_19,
                popuplayertitle: 'Kota Pasuruan',
                interactive: true,
    title: 'Kota Pasuruan<br />\
    <img src="styles/legend/KotaPasuruan_19_0.png" /> Klaster 3<br />' });
var format_Sidoarjo_20 = new ol.format.GeoJSON();
var features_Sidoarjo_20 = format_Sidoarjo_20.readFeatures(json_Sidoarjo_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sidoarjo_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sidoarjo_20.addFeatures(features_Sidoarjo_20);
var lyr_Sidoarjo_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sidoarjo_20, 
                style: style_Sidoarjo_20,
                popuplayertitle: 'Sidoarjo',
                interactive: true,
    title: 'Sidoarjo<br />\
    <img src="styles/legend/Sidoarjo_20_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Sidoarjo_20_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Sidoarjo_20_2.png" /> Klaster 3<br />' });
var format_Mojokerto_21 = new ol.format.GeoJSON();
var features_Mojokerto_21 = format_Mojokerto_21.readFeatures(json_Mojokerto_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mojokerto_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mojokerto_21.addFeatures(features_Mojokerto_21);
var lyr_Mojokerto_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mojokerto_21, 
                style: style_Mojokerto_21,
                popuplayertitle: 'Mojokerto',
                interactive: true,
    title: 'Mojokerto<br />\
    <img src="styles/legend/Mojokerto_21_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Mojokerto_21_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Mojokerto_21_2.png" /> Klaster 3<br />' });
var format_KotaMojokerto_22 = new ol.format.GeoJSON();
var features_KotaMojokerto_22 = format_KotaMojokerto_22.readFeatures(json_KotaMojokerto_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaMojokerto_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaMojokerto_22.addFeatures(features_KotaMojokerto_22);
var lyr_KotaMojokerto_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaMojokerto_22, 
                style: style_KotaMojokerto_22,
                popuplayertitle: 'Kota Mojokerto',
                interactive: true,
    title: 'Kota Mojokerto<br />\
    <img src="styles/legend/KotaMojokerto_22_0.png" /> Klaster 3<br />' });
var format_Jombang_23 = new ol.format.GeoJSON();
var features_Jombang_23 = format_Jombang_23.readFeatures(json_Jombang_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jombang_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jombang_23.addFeatures(features_Jombang_23);
var lyr_Jombang_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jombang_23, 
                style: style_Jombang_23,
                popuplayertitle: 'Jombang',
                interactive: true,
    title: 'Jombang<br />\
    <img src="styles/legend/Jombang_23_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Jombang_23_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Jombang_23_2.png" /> Klaster 3<br />' });
var format_Ngajuk_24 = new ol.format.GeoJSON();
var features_Ngajuk_24 = format_Ngajuk_24.readFeatures(json_Ngajuk_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ngajuk_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ngajuk_24.addFeatures(features_Ngajuk_24);
var lyr_Ngajuk_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ngajuk_24, 
                style: style_Ngajuk_24,
                popuplayertitle: 'Ngajuk',
                interactive: true,
    title: 'Ngajuk<br />\
    <img src="styles/legend/Ngajuk_24_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Ngajuk_24_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Ngajuk_24_2.png" /> Klaster 3<br />' });
var format_Madiun_25 = new ol.format.GeoJSON();
var features_Madiun_25 = format_Madiun_25.readFeatures(json_Madiun_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Madiun_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Madiun_25.addFeatures(features_Madiun_25);
var lyr_Madiun_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Madiun_25, 
                style: style_Madiun_25,
                popuplayertitle: 'Madiun',
                interactive: true,
    title: 'Madiun<br />\
    <img src="styles/legend/Madiun_25_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Madiun_25_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Madiun_25_2.png" /> Klaster 3<br />' });
var format_KotaMadiun_26 = new ol.format.GeoJSON();
var features_KotaMadiun_26 = format_KotaMadiun_26.readFeatures(json_KotaMadiun_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaMadiun_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaMadiun_26.addFeatures(features_KotaMadiun_26);
var lyr_KotaMadiun_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaMadiun_26, 
                style: style_KotaMadiun_26,
                popuplayertitle: 'Kota Madiun',
                interactive: true,
    title: 'Kota Madiun<br />\
    <img src="styles/legend/KotaMadiun_26_0.png" /> Klaster 2<br />\
    <img src="styles/legend/KotaMadiun_26_1.png" /> Klaster 3<br />' });
var format_Magetan_27 = new ol.format.GeoJSON();
var features_Magetan_27 = format_Magetan_27.readFeatures(json_Magetan_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Magetan_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Magetan_27.addFeatures(features_Magetan_27);
var lyr_Magetan_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Magetan_27, 
                style: style_Magetan_27,
                popuplayertitle: 'Magetan',
                interactive: true,
    title: 'Magetan<br />\
    <img src="styles/legend/Magetan_27_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Magetan_27_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Magetan_27_2.png" /> Klaster 3<br />' });
var format_Ngawi_28 = new ol.format.GeoJSON();
var features_Ngawi_28 = format_Ngawi_28.readFeatures(json_Ngawi_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ngawi_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ngawi_28.addFeatures(features_Ngawi_28);
var lyr_Ngawi_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ngawi_28, 
                style: style_Ngawi_28,
                popuplayertitle: 'Ngawi',
                interactive: true,
    title: 'Ngawi<br />\
    <img src="styles/legend/Ngawi_28_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Ngawi_28_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Ngawi_28_2.png" /> Klaster 3<br />' });
var format_Bojonegoro_29 = new ol.format.GeoJSON();
var features_Bojonegoro_29 = format_Bojonegoro_29.readFeatures(json_Bojonegoro_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bojonegoro_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bojonegoro_29.addFeatures(features_Bojonegoro_29);
var lyr_Bojonegoro_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bojonegoro_29, 
                style: style_Bojonegoro_29,
                popuplayertitle: 'Bojonegoro',
                interactive: true,
    title: 'Bojonegoro<br />\
    <img src="styles/legend/Bojonegoro_29_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Bojonegoro_29_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Bojonegoro_29_2.png" /> Klaster 3<br />' });
var format_Tuban_30 = new ol.format.GeoJSON();
var features_Tuban_30 = format_Tuban_30.readFeatures(json_Tuban_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tuban_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tuban_30.addFeatures(features_Tuban_30);
var lyr_Tuban_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tuban_30, 
                style: style_Tuban_30,
                popuplayertitle: 'Tuban',
                interactive: true,
    title: 'Tuban<br />\
    <img src="styles/legend/Tuban_30_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Tuban_30_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Tuban_30_2.png" /> Klaster 3<br />' });
var format_Lamongan_31 = new ol.format.GeoJSON();
var features_Lamongan_31 = format_Lamongan_31.readFeatures(json_Lamongan_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lamongan_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lamongan_31.addFeatures(features_Lamongan_31);
var lyr_Lamongan_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lamongan_31, 
                style: style_Lamongan_31,
                popuplayertitle: 'Lamongan',
                interactive: true,
    title: 'Lamongan<br />\
    <img src="styles/legend/Lamongan_31_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Lamongan_31_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Lamongan_31_2.png" /> Klaster 3<br />' });
var format_Gresik_32 = new ol.format.GeoJSON();
var features_Gresik_32 = format_Gresik_32.readFeatures(json_Gresik_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gresik_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gresik_32.addFeatures(features_Gresik_32);
var lyr_Gresik_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gresik_32, 
                style: style_Gresik_32,
                popuplayertitle: 'Gresik',
                interactive: true,
    title: 'Gresik<br />\
    <img src="styles/legend/Gresik_32_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Gresik_32_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Gresik_32_2.png" /> Klaster 3<br />' });
var format_Bangkalan_33 = new ol.format.GeoJSON();
var features_Bangkalan_33 = format_Bangkalan_33.readFeatures(json_Bangkalan_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangkalan_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangkalan_33.addFeatures(features_Bangkalan_33);
var lyr_Bangkalan_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangkalan_33, 
                style: style_Bangkalan_33,
                popuplayertitle: 'Bangkalan',
                interactive: true,
    title: 'Bangkalan<br />\
    <img src="styles/legend/Bangkalan_33_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Bangkalan_33_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Bangkalan_33_2.png" /> Klaster 3<br />' });
var format_Sampang_34 = new ol.format.GeoJSON();
var features_Sampang_34 = format_Sampang_34.readFeatures(json_Sampang_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sampang_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sampang_34.addFeatures(features_Sampang_34);
var lyr_Sampang_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sampang_34, 
                style: style_Sampang_34,
                popuplayertitle: 'Sampang',
                interactive: true,
    title: 'Sampang<br />\
    <img src="styles/legend/Sampang_34_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Sampang_34_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Sampang_34_2.png" /> Klaster 3<br />' });
var format_Pamekasan_35 = new ol.format.GeoJSON();
var features_Pamekasan_35 = format_Pamekasan_35.readFeatures(json_Pamekasan_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pamekasan_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pamekasan_35.addFeatures(features_Pamekasan_35);
var lyr_Pamekasan_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pamekasan_35, 
                style: style_Pamekasan_35,
                popuplayertitle: 'Pamekasan',
                interactive: true,
    title: 'Pamekasan<br />\
    <img src="styles/legend/Pamekasan_35_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Pamekasan_35_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Pamekasan_35_2.png" /> Klaster 3<br />' });
var format_Sumenep_36 = new ol.format.GeoJSON();
var features_Sumenep_36 = format_Sumenep_36.readFeatures(json_Sumenep_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sumenep_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sumenep_36.addFeatures(features_Sumenep_36);
var lyr_Sumenep_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sumenep_36, 
                style: style_Sumenep_36,
                popuplayertitle: 'Sumenep',
                interactive: true,
    title: 'Sumenep<br />\
    <img src="styles/legend/Sumenep_36_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Sumenep_36_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Sumenep_36_2.png" /> Klaster 3<br />' });
var format_Surabaya_37 = new ol.format.GeoJSON();
var features_Surabaya_37 = format_Surabaya_37.readFeatures(json_Surabaya_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Surabaya_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Surabaya_37.addFeatures(features_Surabaya_37);
var lyr_Surabaya_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Surabaya_37, 
                style: style_Surabaya_37,
                popuplayertitle: 'Surabaya',
                interactive: true,
    title: 'Surabaya<br />\
    <img src="styles/legend/Surabaya_37_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Surabaya_37_1.png" /> Klaster 2<br />\
    <img src="styles/legend/Surabaya_37_2.png" /> Klaster 3<br />' });
var format_Batu_38 = new ol.format.GeoJSON();
var features_Batu_38 = format_Batu_38.readFeatures(json_Batu_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batu_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batu_38.addFeatures(features_Batu_38);
var lyr_Batu_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batu_38, 
                style: style_Batu_38,
                popuplayertitle: 'Batu',
                interactive: true,
    title: 'Batu<br />\
    <img src="styles/legend/Batu_38_0.png" /> Klaster 1<br />\
    <img src="styles/legend/Batu_38_1.png" /> Klaster 2<br />' });
var format_BatasKabupaten_39 = new ol.format.GeoJSON();
var features_BatasKabupaten_39 = format_BatasKabupaten_39.readFeatures(json_BatasKabupaten_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKabupaten_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKabupaten_39.addFeatures(features_BatasKabupaten_39);
var lyr_BatasKabupaten_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKabupaten_39, 
                style: style_BatasKabupaten_39,
                popuplayertitle: 'Batas Kabupaten',
                interactive: true,
                title: '<img src="styles/legend/BatasKabupaten_39.png" /> Batas Kabupaten'
            });
var group_ClusterESGperKabupatenKotaJawaTimur = new ol.layer.Group({
                                layers: [lyr_Pacitan_1,lyr_Ponorogo_2,lyr_Trenggalek_3,lyr_Tulungagung_4,lyr_Blitar_5,lyr_KotaBlitar_6,lyr_Kediri_7,lyr_KotaKediri_8,lyr_Malang_9,lyr_KotaMalang_10,lyr_Lumajang_11,lyr_Jember_12,lyr_Banyuwangi_13,lyr_Bondowoso_14,lyr_Situbondo_15,lyr_Probolinggo_16,lyr_KotaProbolinggo_17,lyr_Pasuruan_18,lyr_KotaPasuruan_19,lyr_Sidoarjo_20,lyr_Mojokerto_21,lyr_KotaMojokerto_22,lyr_Jombang_23,lyr_Ngajuk_24,lyr_Madiun_25,lyr_KotaMadiun_26,lyr_Magetan_27,lyr_Ngawi_28,lyr_Bojonegoro_29,lyr_Tuban_30,lyr_Lamongan_31,lyr_Gresik_32,lyr_Bangkalan_33,lyr_Sampang_34,lyr_Pamekasan_35,lyr_Sumenep_36,lyr_Surabaya_37,lyr_Batu_38,],
                                fold: 'close',
                                title: 'Cluster ESG per Kabupaten/Kota Jawa Timur'});

lyr_GoogleSatellite_0.setVisible(true);lyr_Pacitan_1.setVisible(true);lyr_Ponorogo_2.setVisible(true);lyr_Trenggalek_3.setVisible(true);lyr_Tulungagung_4.setVisible(true);lyr_Blitar_5.setVisible(true);lyr_KotaBlitar_6.setVisible(true);lyr_Kediri_7.setVisible(true);lyr_KotaKediri_8.setVisible(true);lyr_Malang_9.setVisible(true);lyr_KotaMalang_10.setVisible(true);lyr_Lumajang_11.setVisible(true);lyr_Jember_12.setVisible(true);lyr_Banyuwangi_13.setVisible(true);lyr_Bondowoso_14.setVisible(true);lyr_Situbondo_15.setVisible(true);lyr_Probolinggo_16.setVisible(true);lyr_KotaProbolinggo_17.setVisible(true);lyr_Pasuruan_18.setVisible(true);lyr_KotaPasuruan_19.setVisible(true);lyr_Sidoarjo_20.setVisible(true);lyr_Mojokerto_21.setVisible(true);lyr_KotaMojokerto_22.setVisible(true);lyr_Jombang_23.setVisible(true);lyr_Ngajuk_24.setVisible(true);lyr_Madiun_25.setVisible(true);lyr_KotaMadiun_26.setVisible(true);lyr_Magetan_27.setVisible(true);lyr_Ngawi_28.setVisible(true);lyr_Bojonegoro_29.setVisible(true);lyr_Tuban_30.setVisible(true);lyr_Lamongan_31.setVisible(true);lyr_Gresik_32.setVisible(true);lyr_Bangkalan_33.setVisible(true);lyr_Sampang_34.setVisible(true);lyr_Pamekasan_35.setVisible(true);lyr_Sumenep_36.setVisible(true);lyr_Surabaya_37.setVisible(true);lyr_Batu_38.setVisible(true);lyr_BatasKabupaten_39.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_ClusterESGperKabupatenKotaJawaTimur,lyr_BatasKabupaten_39];
lyr_Pacitan_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Ponorogo_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Trenggalek_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Tulungagung_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Blitar_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_KotaBlitar_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Kediri_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_KotaKediri_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Malang_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_KotaMalang_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Lumajang_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Jember_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Banyuwangi_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Bondowoso_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Situbondo_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Probolinggo_16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_KotaProbolinggo_17.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Pasuruan_18.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_KotaPasuruan_19.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Sidoarjo_20.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Mojokerto_21.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_KotaMojokerto_22.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Jombang_23.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Ngajuk_24.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Madiun_25.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_KotaMadiun_26.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Magetan_27.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Ngawi_28.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Bojonegoro_29.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Tuban_30.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Lamongan_31.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Gresik_32.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Bangkalan_33.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Sampang_34.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Pamekasan_35.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Sumenep_36.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Surabaya_37.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_Batu_38.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'LUASWH': 'LUASWH', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'E': 'E', 'S': 'S', 'G': 'G', 'Cluster': 'Cluster', 'ESG': 'ESG', });
lyr_BatasKabupaten_39.set('fieldAliases', {'FID': 'FID', 'gid': 'gid', 'kdprov': 'kdprov', 'kdkab': 'kdkab', 'nmprov': 'nmprov', 'nmkab': 'nmkab', 'periode': 'periode', 'idkab': 'idkab', 'sumber': 'sumber', });
lyr_Pacitan_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Ponorogo_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Trenggalek_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Tulungagung_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Blitar_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_KotaBlitar_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Kediri_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_KotaKediri_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Malang_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_KotaMalang_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Lumajang_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Jember_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Banyuwangi_13.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Bondowoso_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Situbondo_15.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Probolinggo_16.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_KotaProbolinggo_17.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Pasuruan_18.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_KotaPasuruan_19.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Sidoarjo_20.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Mojokerto_21.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_KotaMojokerto_22.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Jombang_23.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Ngajuk_24.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Madiun_25.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_KotaMadiun_26.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Magetan_27.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Ngawi_28.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Bojonegoro_29.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Tuban_30.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Lamongan_31.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Gresik_32.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Bangkalan_33.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Sampang_34.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Pamekasan_35.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Sumenep_36.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Surabaya_37.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_Batu_38.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'E': 'TextEdit', 'S': 'TextEdit', 'G': 'TextEdit', 'Cluster': 'TextEdit', 'ESG': 'TextEdit', });
lyr_BatasKabupaten_39.set('fieldImages', {'FID': 'TextEdit', 'gid': 'TextEdit', 'kdprov': 'TextEdit', 'kdkab': 'TextEdit', 'nmprov': 'TextEdit', 'nmkab': 'TextEdit', 'periode': 'TextEdit', 'idkab': 'TextEdit', 'sumber': 'TextEdit', });
lyr_Pacitan_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Ponorogo_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Trenggalek_3.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Tulungagung_4.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Blitar_5.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_KotaBlitar_6.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Kediri_7.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_KotaKediri_8.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Malang_9.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_KotaMalang_10.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Lumajang_11.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Jember_12.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Banyuwangi_13.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Bondowoso_14.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Situbondo_15.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Probolinggo_16.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_KotaProbolinggo_17.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Pasuruan_18.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_KotaPasuruan_19.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Sidoarjo_20.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Mojokerto_21.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_KotaMojokerto_22.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Jombang_23.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Ngajuk_24.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Madiun_25.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_KotaMadiun_26.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Magetan_27.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Ngawi_28.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Bojonegoro_29.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Tuban_30.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Lamongan_31.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Gresik_32.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Bangkalan_33.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Sampang_34.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Pamekasan_35.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Sumenep_36.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Surabaya_37.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_Batu_38.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'LUASWH': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'E': 'no label', 'S': 'no label', 'G': 'no label', 'Cluster': 'no label', 'ESG': 'no label', });
lyr_BatasKabupaten_39.set('fieldLabels', {'FID': 'no label', 'gid': 'no label', 'kdprov': 'no label', 'kdkab': 'no label', 'nmprov': 'no label', 'nmkab': 'no label', 'periode': 'no label', 'idkab': 'no label', 'sumber': 'no label', });
lyr_BatasKabupaten_39.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});