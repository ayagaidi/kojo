$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

function serachpermitnumber() {
    var permitnumber = document.getElementById('permitnumber').value;
    var fromdate = document.getElementById('fromdate').value;
    var todate = document.getElementById('todate').value;


    if ((permitnumber == "") && (fromdate == "") && (todate == "")) {
        $('#load').html('');
        Swal.fire(' اختر عنصر بحث', ' اختر عنصر بحث واحد علي الاقل', 'error');

    }


    if ((permitnumber != "") && (fromdate == "") && (todate == "")) {

        $.ajax({
            url: '../report/searchbypermitnumber',
            type: 'GET',
            data: {
                permitnumber: $('#permitnumber').val(),
            },
            success: function(response) {

                if (!response) {
                    $('#load').html('');
                } else {
                    $('#load').html(
                        '<div class="col-md-12">' +
                        '<div class="box-content">' +
                        '<h4 class = "box-title" style="color: #45484a;font-size: large;" > البحث ب   رقم  التصريح   </h4>' +
                        '  <div class="table-responsive" data-pattern="priority-columns">' +
                        ' <table id="table" class="table table-bordered table-hover js-basic-example dataTable table-custom " style = "cursor: pointer;" > ' +
                        '<thead>' +
                        '<tr>' +
                        ' <th>' + "اسم الشركة " + ' </th>' +

                        ' <th>' + "رقم التصريح" + ' </th>' +
                        ' <th>' + " نوع التصريح  " + ' </th>' +
                        ' <th>' + "فرع " + '  </th>' +
                        '<th>' + "عنوان الموقع " + '  </th>' +
                        ' <th>' + "  تاريخ البدء" + ' </th>' +
                        ' <th>' + " الفترة " + ' </th>' +
                        '  <th>' + " تاريخ الإنتهاط " + '</th>' +
                        '  <th>' + "  حالة الطلب " + '</th>' +
                        '  <th>' + " تاريخ الطلب " + '</th>' +
                        '  <th>' + " " + '</th>' +

                        '</tr>' +
                        '</thead>' +
                        '<tbody id="rosss">' +

                        '</tbody>' +
                        '</table>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>');

                    for (var i = 0; i < response['data'].length; i++) {

                        $('#rosss').append(
                            '<tr><td>' + response['data'][i].companies.name + '</td><td>' + response['data'][i].permitnumber + '</td><td>' + response['data'][i].types_of_permits.name + '</td><td>' + response['data'][i].branches.name + '</td><td>' + response['data'][i].site_name + '</td><td>' + response['data'][i].permit_start_date + '</td><td>' + response['data'][i].permitـduration + '</td><td>' + response['data'][i].permit_end_date + '</td><td>' + response['data'][i].request_types.name + '</td><td>' + response['data'][i].created_at + '</td><td>' + response['data'][i].show + '</td></tr>');

                    }
                    $('#table').dataTable({
                        "language": {
                            "url": "../Arabic.json" //arbaic lang

                        },
                        "lengthMenu": [10, 50, 100, 150, 200, 250, 300, 350],
                        "bLengthChange": true, //thought this line could hide the LengthMenu
                        serverSide: false,
                        paging: true,
                        searching: false,
                        ordering: false,
                        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',



                        dom: 'Blfrtip',

                        buttons: [{
                                extend: 'copyHtml5',
                                exportOptions: {
                                    columns: [':visible']
                                },
                                text: 'نسخ'
                            },
                            {
                                extend: 'excelHtml5',
                                exportOptions: {
                                    columns: ':visible'
                                },
                                text: 'excel تصدير كـ '

                            },
                            {
                                extend: 'colvis',
                                text: 'الأعمدة'

                            },
                        ],

                    });


                }


            }
        });

    }

    if ((permitnumber == "") && (fromdate != "") && (todate != "")) {

        $.ajax({
            url: '../report/searchbydate',
            type: 'GET',
            data: {
                fromdate: $('#fromdate').val(),
                todate: $('#todate').val(),

            },
            success: function(response) {

                if (!response) {
                    $('#load').html('');
                } else {
                    $('#load').html(
                        '<div class="col-md-12">' +
                        '<div class="box-content">' +
                        '<h4 class = "box-title" style="color: #45484a;font-size: large;" > البحث ب   بالتاريخ   </h4>' +
                        '  <div class="table-responsive" data-pattern="priority-columns">' +
                        ' <table id="table" class="table table-bordered table-hover js-basic-example dataTable table-custom " style = "cursor: pointer;" > ' +
                        '<thead>' +
                        '<tr>' +
                        ' <th>' + "اسم الشركة " + ' </th>' +

                        ' <th>' + "رقم التصريح" + ' </th>' +
                        ' <th>' + " نوع التصريح  " + ' </th>' +
                        ' <th>' + "فرع " + '  </th>' +
                        '<th>' + "عنوان الموقع " + '  </th>' +
                        ' <th>' + "  تاريخ البدء" + ' </th>' +
                        ' <th>' + " الفترة " + ' </th>' +
                        '  <th>' + " تاريخ الإنتهاط " + '</th>' +
                        '  <th>' + "  حالة الطلب " + '</th>' +
                        '  <th>' + " تاريخ الطلب " + '</th>' +
                        '  <th>' + " " + '</th>' +

                        '</tr>' +
                        '</thead>' +
                        '<tbody id="rosss">' +

                        '</tbody>' +
                        '</table>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>');

                    for (var i = 0; i < response['data'].length; i++) {

                        $('#rosss').append(
                            '<tr><td>' + response['data'][i].companies.name + '</td><td>' + response['data'][i].permitnumber + '</td><td>' + response['data'][i].types_of_permits.name + '</td><td>' + response['data'][i].branches.name + '</td><td>' + response['data'][i].site_name + '</td><td>' + response['data'][i].permit_start_date + '</td><td>' + response['data'][i].permitـduration + '</td><td>' + response['data'][i].permit_end_date + '</td><td>' + response['data'][i].request_types.name + '</td><td>' + response['data'][i].created_at + '</td><td>' + response['data'][i].show + '</td></tr>');

                    }
                    $('#table').dataTable({
                        "language": {
                            "url": "../Arabic.json" //arbaic lang

                        },
                        "lengthMenu": [10, 50, 100, 150, 200, 250, 300, 350],
                        "bLengthChange": true, //thought this line could hide the LengthMenu
                        serverSide: false,
                        paging: true,
                        searching: false,
                        ordering: false,
                        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',



                        dom: 'Blfrtip',

                        buttons: [{
                                extend: 'copyHtml5',
                                exportOptions: {
                                    columns: [':visible']
                                },
                                text: 'نسخ'
                            },
                            {
                                extend: 'excelHtml5',
                                exportOptions: {
                                    columns: ':visible'
                                },
                                text: 'excel تصدير كـ '

                            },
                            {
                                extend: 'colvis',
                                text: 'الأعمدة'

                            },
                        ],

                    });


                }


            }
        });

    }
    if ((permitnumber != "") && (fromdate != "") && (todate != "")) {

        $.ajax({
            url: '../report/searchbydateandppermitnumber',
            type: 'GET',
            data: {
                permitnumber: $('#permitnumber').val(),
                fromdate: $('#fromdate').val(),

                todate: $('#todate').val(),

            },
            success: function(response) {

                if (!response) {
                    $('#load').html('');
                } else {
                    $('#load').html(
                        '<div class="col-md-12">' +
                        '<div class="box-content">' +
                        '<h4 class = "box-title" style="color: #45484a;font-size: large;" > البحث ب   رقم التصريح  والتاريخ  </h4>' +
                        '  <div class="table-responsive" data-pattern="priority-columns">' +
                        ' <table id="table" class="table table-bordered table-hover js-basic-example dataTable table-custom " style = "cursor: pointer;" > ' +
                        '<thead>' +
                        '<tr>' +
                        ' <th>' + "اسم الشركة " + ' </th>' +

                        ' <th>' + "رقم التصريح" + ' </th>' +
                        ' <th>' + " نوع التصريح  " + ' </th>' +
                        ' <th>' + "فرع " + '  </th>' +
                        '<th>' + "عنوان الموقع " + '  </th>' +
                        ' <th>' + "  تاريخ البدء" + ' </th>' +
                        ' <th>' + " الفترة " + ' </th>' +
                        '  <th>' + " تاريخ الإنتهاط " + '</th>' +
                        '  <th>' + "  حالة الطلب " + '</th>' +
                        '  <th>' + " تاريخ الطلب " + '</th>' +
                        '  <th>' + " " + '</th>' +

                        '</tr>' +
                        '</thead>' +
                        '<tbody id="rosss">' +

                        '</tbody>' +
                        '</table>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>');

                    for (var i = 0; i < response['data'].length; i++) {

                        $('#rosss').append(
                            '<tr><td>' + response['data'][i].companies.name + '</td><td>' + response['data'][i].permitnumber + '</td><td>' + response['data'][i].types_of_permits.name + '</td><td>' + response['data'][i].branches.name + '</td><td>' + response['data'][i].site_name + '</td><td>' + response['data'][i].permit_start_date + '</td><td>' + response['data'][i].permitـduration + '</td><td>' + response['data'][i].permit_end_date + '</td><td>' + response['data'][i].request_types.name + '</td><td>' + response['data'][i].created_at + '</td><td>' + response['data'][i].show + '</td></tr>');

                    }
                    $('#table').dataTable({
                        "language": {
                            "url": "../Arabic.json" //arbaic lang

                        },
                        "lengthMenu": [10, 50, 100, 150, 200, 250, 300, 350],
                        "bLengthChange": true, //thought this line could hide the LengthMenu
                        serverSide: false,
                        paging: true,
                        searching: false,
                        ordering: false,
                        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',



                        dom: 'Blfrtip',

                        buttons: [{
                                extend: 'copyHtml5',
                                exportOptions: {
                                    columns: [':visible']
                                },
                                text: 'نسخ'
                            },
                            {
                                extend: 'excelHtml5',
                                exportOptions: {
                                    columns: ':visible'
                                },
                                text: 'excel تصدير كـ '

                            },
                            {
                                extend: 'colvis',
                                text: 'الأعمدة'

                            },
                        ],

                    });


                }


            }
        });

    }
}



function serachsites() {
    var sites_id = document.getElementById('sites_id').value;
    var fromdate = document.getElementById('fromdate').value;
    var todate = document.getElementById('todate').value;


    if ((sites_id == "") && (fromdate == "") && (todate == "")) {
        $('#load').html('');
        Swal.fire(' اختر عنصر بحث', ' اختر عنصر بحث واحد علي الاقل', 'error');

    }


    if ((sites_id != "") && (fromdate == "") && (todate == "")) {

        $.ajax({
            url: '../report/searchbysites',
            type: 'GET',
            data: {
                sites_id: $('#sites_id').val(),
            },
            success: function(response) {

                if (!response) {
                    $('#load').html('');
                } else {
                    $('#load').html(
                        '<div class="col-md-12">' +
                        '<div class="box-content">' +
                        '<h4 class = "box-title" style="color: #45484a;font-size: large;" > البحث ب   اسم الموقع  </h4>' +
                        '  <div class="table-responsive" data-pattern="priority-columns">' +
                        ' <table id="table" class="table table-bordered table-hover js-basic-example dataTable table-custom " style = "cursor: pointer;" > ' +
                        '<thead>' +
                        '<tr>' +
                        ' <th>' + "اسم الشركة " + ' </th>' +

                        ' <th>' + "رقم التصريح" + ' </th>' +
                        ' <th>' + " نوع التصريح  " + ' </th>' +
                        ' <th>' + "فرع " + '  </th>' +
                        '<th>' + "عنوان الموقع " + '  </th>' +
                        ' <th>' + "  تاريخ البدء" + ' </th>' +
                        ' <th>' + " الفترة " + ' </th>' +
                        '  <th>' + " تاريخ الإنتهاط " + '</th>' +
                        '  <th>' + "  حالة الطلب " + '</th>' +
                        '  <th>' + " تاريخ الطلب " + '</th>' +
                        '  <th>' + " " + '</th>' +

                        '</tr>' +
                        '</thead>' +
                        '<tbody id="rosss">' +

                        '</tbody>' +
                        '</table>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>');

                    for (var i = 0; i < response['data'].length; i++) {

                        $('#rosss').append(
                            '<tr><td>' + response['data'][i].companies.name + '</td><td>' + response['data'][i].permitnumber + '</td><td>' + response['data'][i].types_of_permits.name + '</td><td>' + response['data'][i].branches.name + '</td><td>' + response['data'][i].site_name + '</td><td>' + response['data'][i].permit_start_date + '</td><td>' + response['data'][i].permitـduration + '</td><td>' + response['data'][i].permit_end_date + '</td><td>' + response['data'][i].request_types.name + '</td><td>' + response['data'][i].created_at + '</td><td>' + response['data'][i].show + '</td></tr>');

                    }
                    $('#table').dataTable({
                        "language": {
                            "url": "../Arabic.json" //arbaic lang

                        },
                        "lengthMenu": [10, 50, 100, 150, 200, 250, 300, 350],
                        "bLengthChange": true, //thought this line could hide the LengthMenu
                        serverSide: false,
                        paging: true,
                        searching: false,
                        ordering: false,
                        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',



                        dom: 'Blfrtip',

                        buttons: [{
                                extend: 'copyHtml5',
                                exportOptions: {
                                    columns: [':visible']
                                },
                                text: 'نسخ'
                            },
                            {
                                extend: 'excelHtml5',
                                exportOptions: {
                                    columns: ':visible'
                                },
                                text: 'excel تصدير كـ '

                            },
                            {
                                extend: 'colvis',
                                text: 'الأعمدة'

                            },
                        ],

                    });


                }


            }
        });

    }

    if ((sites_id == "") && (fromdate != "") && (todate != "")) {

        $.ajax({
            url: '../report/searchbydate',
            type: 'GET',
            data: {
                fromdate: $('#fromdate').val(),
                todate: $('#todate').val(),

            },
            success: function(response) {

                if (!response) {
                    $('#load').html('');
                } else {
                    $('#load').html(
                        '<div class="col-md-12">' +
                        '<div class="box-content">' +
                        '<h4 class = "box-title" style="color: #45484a;font-size: large;" > البحث ب   بالتاريخ   </h4>' +
                        '  <div class="table-responsive" data-pattern="priority-columns">' +
                        ' <table id="table" class="table table-bordered table-hover js-basic-example dataTable table-custom " style = "cursor: pointer;" > ' +
                        '<thead>' +
                        '<tr>' +
                        ' <th>' + "اسم الشركة " + ' </th>' +

                        ' <th>' + "رقم التصريح" + ' </th>' +
                        ' <th>' + " نوع التصريح  " + ' </th>' +
                        ' <th>' + "فرع " + '  </th>' +
                        '<th>' + "عنوان الموقع " + '  </th>' +
                        ' <th>' + "  تاريخ البدء" + ' </th>' +
                        ' <th>' + " الفترة " + ' </th>' +
                        '  <th>' + " تاريخ الإنتهاط " + '</th>' +
                        '  <th>' + "  حالة الطلب " + '</th>' +
                        '  <th>' + " تاريخ الطلب " + '</th>' +
                        '  <th>' + " " + '</th>' +

                        '</tr>' +
                        '</thead>' +
                        '<tbody id="rosss">' +

                        '</tbody>' +
                        '</table>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>');

                    for (var i = 0; i < response['data'].length; i++) {

                        $('#rosss').append(
                            '<tr><td>' + response['data'][i].companies.name + '</td><td>' + response['data'][i].permitnumber + '</td><td>' + response['data'][i].types_of_permits.name + '</td><td>' + response['data'][i].branches.name + '</td><td>' + response['data'][i].site_name + '</td><td>' + response['data'][i].permit_start_date + '</td><td>' + response['data'][i].permitـduration + '</td><td>' + response['data'][i].permit_end_date + '</td><td>' + response['data'][i].request_types.name + '</td><td>' + response['data'][i].created_at + '</td><td>' + response['data'][i].show + '</td></tr>');

                    }
                    $('#table').dataTable({
                        "language": {
                            "url": "../Arabic.json" //arbaic lang

                        },
                        "lengthMenu": [10, 50, 100, 150, 200, 250, 300, 350],
                        "bLengthChange": true, //thought this line could hide the LengthMenu
                        serverSide: false,
                        paging: true,
                        searching: false,
                        ordering: false,
                        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',



                        dom: 'Blfrtip',

                        buttons: [{
                                extend: 'copyHtml5',
                                exportOptions: {
                                    columns: [':visible']
                                },
                                text: 'نسخ'
                            },
                            {
                                extend: 'excelHtml5',
                                exportOptions: {
                                    columns: ':visible'
                                },
                                text: 'excel تصدير كـ '

                            },
                            {
                                extend: 'colvis',
                                text: 'الأعمدة'

                            },
                        ],

                    });


                }


            }
        });

    }
    if ((sites_id != "") && (fromdate != "") && (todate != "")) {

        $.ajax({
            url: '../report/searchbydateandsite',
            type: 'GET',
            data: {
                sites_id: $('#sites_id').val(),
                fromdate: $('#fromdate').val(),

                todate: $('#todate').val(),

            },
            success: function(response) {

                if (!response) {
                    $('#load').html('');
                } else {
                    $('#load').html(
                        '<div class="col-md-12">' +
                        '<div class="box-content">' +
                        '<h4 class = "box-title" style="color: #45484a;font-size: large;" > البحث ب   اسم الموقع والتاريخ  </h4>' +
                        '  <div class="table-responsive" data-pattern="priority-columns">' +
                        ' <table id="table" class="table table-bordered table-hover js-basic-example dataTable table-custom " style = "cursor: pointer;" > ' +
                        '<thead>' +
                        '<tr>' +
                        ' <th>' + "اسم الشركة " + ' </th>' +

                        ' <th>' + "رقم التصريح" + ' </th>' +
                        ' <th>' + " نوع التصريح  " + ' </th>' +
                        ' <th>' + "فرع " + '  </th>' +
                        '<th>' + "عنوان الموقع " + '  </th>' +
                        ' <th>' + "  تاريخ البدء" + ' </th>' +
                        ' <th>' + " الفترة " + ' </th>' +
                        '  <th>' + " تاريخ الإنتهاط " + '</th>' +
                        '  <th>' + "  حالة الطلب " + '</th>' +
                        '  <th>' + " تاريخ الطلب " + '</th>' +
                        '  <th>' + " " + '</th>' +

                        '</tr>' +
                        '</thead>' +
                        '<tbody id="rosss">' +

                        '</tbody>' +
                        '</table>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>');

                    for (var i = 0; i < response['data'].length; i++) {

                        $('#rosss').append(
                            '<tr><td>' + response['data'][i].companies.name + '</td><td>' + response['data'][i].permitnumber + '</td><td>' + response['data'][i].types_of_permits.name + '</td><td>' + response['data'][i].branches.name + '</td><td>' + response['data'][i].site_name + '</td><td>' + response['data'][i].permit_start_date + '</td><td>' + response['data'][i].permitـduration + '</td><td>' + response['data'][i].permit_end_date + '</td><td>' + response['data'][i].request_types.name + '</td><td>' + response['data'][i].created_at + '</td><td>' + response['data'][i].show + '</td></tr>');

                    }
                    $('#table').dataTable({
                        "language": {
                            "url": "../Arabic.json" //arbaic lang

                        },
                        "lengthMenu": [10, 50, 100, 150, 200, 250, 300, 350],
                        "bLengthChange": true, //thought this line could hide the LengthMenu
                        serverSide: false,
                        paging: true,
                        searching: false,
                        ordering: false,
                        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',



                        dom: 'Blfrtip',

                        buttons: [{
                                extend: 'copyHtml5',
                                exportOptions: {
                                    columns: [':visible']
                                },
                                text: 'نسخ'
                            },
                            {
                                extend: 'excelHtml5',
                                exportOptions: {
                                    columns: ':visible'
                                },
                                text: 'excel تصدير كـ '

                            },
                            {
                                extend: 'colvis',
                                text: 'الأعمدة'

                            },
                        ],

                    });


                }


            }
        });

    }
}


function serachtyperequest() {
    var request_types_id = document.getElementById('request_types_id').value;
    var fromdate = document.getElementById('fromdate').value;
    var todate = document.getElementById('todate').value;


    if ((request_types_id == "") && (fromdate == "") && (todate == "")) {
        $('#load').html('');
        Swal.fire(' اختر عنصر بحث', ' اختر عنصر بحث واحد علي الاقل', 'error');

    }


    if ((request_types_id != "") && (fromdate == "") && (todate == "")) {

        $.ajax({
            url: '../report/searchbyrequestty',
            type: 'GET',
            data: {
                request_types_id: $('#request_types_id').val(),
            },
            success: function(response) {

                if (!response) {
                    $('#load').html('');
                } else {
                    $('#load').html(
                        '<div class="col-md-12">' +
                        '<div class="box-content">' +
                        '<h4 class = "box-title" style="color: #45484a;font-size: large;" > البحث ب   اسم حالة الطلب  </h4>' +
                        '  <div class="table-responsive" data-pattern="priority-columns">' +
                        ' <table id="table" class="table table-bordered table-hover js-basic-example dataTable table-custom " style = "cursor: pointer;" > ' +
                        '<thead>' +
                        '<tr>' +
                        ' <th>' + "اسم الشركة " + ' </th>' +

                        ' <th>' + "رقم التصريح" + ' </th>' +
                        ' <th>' + " نوع التصريح  " + ' </th>' +
                        ' <th>' + "فرع " + '  </th>' +
                        '<th>' + "عنوان الموقع " + '  </th>' +
                        ' <th>' + "  تاريخ البدء" + ' </th>' +
                        ' <th>' + " الفترة " + ' </th>' +
                        '  <th>' + " تاريخ الإنتهاط " + '</th>' +
                        '  <th>' + "  حالة الطلب " + '</th>' +
                        '  <th>' + " تاريخ الطلب " + '</th>' +
                        '  <th>' + " " + '</th>' +

                        '</tr>' +
                        '</thead>' +
                        '<tbody id="rosss">' +

                        '</tbody>' +
                        '</table>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>');

                    for (var i = 0; i < response['data'].length; i++) {

                        $('#rosss').append(
                            '<tr><td>' + response['data'][i].companies.name + '</td><td>' + response['data'][i].permitnumber + '</td><td>' + response['data'][i].types_of_permits.name + '</td><td>' + response['data'][i].branches.name + '</td><td>' + response['data'][i].site_name + '</td><td>' + response['data'][i].permit_start_date + '</td><td>' + response['data'][i].permitـduration + '</td><td>' + response['data'][i].permit_end_date + '</td><td>' + response['data'][i].request_types.name + '</td><td>' + response['data'][i].created_at + '</td><td>' + response['data'][i].show + '</td></tr>');

                    }
                    $('#table').dataTable({
                        "language": {
                            "url": "../Arabic.json" //arbaic lang

                        },
                        "lengthMenu": [10, 50, 100, 150, 200, 250, 300, 350],
                        "bLengthChange": true, //thought this line could hide the LengthMenu
                        serverSide: false,
                        paging: true,
                        searching: false,
                        ordering: false,
                        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',



                        dom: 'Blfrtip',

                        buttons: [{
                                extend: 'copyHtml5',
                                exportOptions: {
                                    columns: [':visible']
                                },
                                text: 'نسخ'
                            },
                            {
                                extend: 'excelHtml5',
                                exportOptions: {
                                    columns: ':visible'
                                },
                                text: 'excel تصدير كـ '

                            },
                            {
                                extend: 'colvis',
                                text: 'الأعمدة'

                            },
                        ],

                    });


                }


            }
        });

    }

    if ((request_types_id == "") && (fromdate != "") && (todate != "")) {

        $.ajax({
            url: '../report/searchbydate',
            type: 'GET',
            data: {
                fromdate: $('#fromdate').val(),
                todate: $('#todate').val(),

            },
            success: function(response) {

                if (!response) {
                    $('#load').html('');
                } else {
                    $('#load').html(
                        '<div class="col-md-12">' +
                        '<div class="box-content">' +
                        '<h4 class = "box-title" style="color: #45484a;font-size: large;" > البحث ب   بالتاريخ   </h4>' +
                        '  <div class="table-responsive" data-pattern="priority-columns">' +
                        ' <table id="table" class="table table-bordered table-hover js-basic-example dataTable table-custom " style = "cursor: pointer;" > ' +
                        '<thead>' +
                        '<tr>' +
                        ' <th>' + "اسم الشركة " + ' </th>' +

                        ' <th>' + "رقم التصريح" + ' </th>' +
                        ' <th>' + " نوع التصريح  " + ' </th>' +
                        ' <th>' + "فرع " + '  </th>' +
                        '<th>' + "عنوان الموقع " + '  </th>' +
                        ' <th>' + "  تاريخ البدء" + ' </th>' +
                        ' <th>' + " الفترة " + ' </th>' +
                        '  <th>' + " تاريخ الإنتهاط " + '</th>' +
                        '  <th>' + "  حالة الطلب " + '</th>' +
                        '  <th>' + " تاريخ الطلب " + '</th>' +
                        '  <th>' + " " + '</th>' +

                        '</tr>' +
                        '</thead>' +
                        '<tbody id="rosss">' +

                        '</tbody>' +
                        '</table>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>');

                    for (var i = 0; i < response['data'].length; i++) {

                        $('#rosss').append(
                            '<tr><td>' + response['data'][i].companies.name + '</td><td>' + response['data'][i].permitnumber + '</td><td>' + response['data'][i].types_of_permits.name + '</td><td>' + response['data'][i].branches.name + '</td><td>' + response['data'][i].site_name + '</td><td>' + response['data'][i].permit_start_date + '</td><td>' + response['data'][i].permitـduration + '</td><td>' + response['data'][i].permit_end_date + '</td><td>' + response['data'][i].request_types.name + '</td><td>' + response['data'][i].created_at + '</td><td>' + response['data'][i].show + '</td></tr>');

                    }
                    $('#table').dataTable({
                        "language": {
                            "url": "../Arabic.json" //arbaic lang

                        },
                        "lengthMenu": [10, 50, 100, 150, 200, 250, 300, 350],
                        "bLengthChange": true, //thought this line could hide the LengthMenu
                        serverSide: false,
                        paging: true,
                        searching: false,
                        ordering: false,
                        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',



                        dom: 'Blfrtip',

                        buttons: [{
                                extend: 'copyHtml5',
                                exportOptions: {
                                    columns: [':visible']
                                },
                                text: 'نسخ'
                            },
                            {
                                extend: 'excelHtml5',
                                exportOptions: {
                                    columns: ':visible'
                                },
                                text: 'excel تصدير كـ '

                            },
                            {
                                extend: 'colvis',
                                text: 'الأعمدة'

                            },
                        ],

                    });


                }


            }
        });

    }
    if ((request_types_id != "") && (fromdate != "") && (todate != "")) {

        $.ajax({
            url: '../report/searchbydateandtypesreq',
            type: 'GET',
            data: {
                request_types_id: $('#request_types_id').val(),
                fromdate: $('#fromdate').val(),

                todate: $('#todate').val(),

            },
            success: function(response) {

                if (!response) {
                    $('#load').html('');
                } else {
                    $('#load').html(
                        '<div class="col-md-12">' +
                        '<div class="box-content">' +
                        '<h4 class = "box-title" style="color: #45484a;font-size: large;" > البحث ب    حالة الطلب والتاريخ  </h4>' +
                        '  <div class="table-responsive" data-pattern="priority-columns">' +
                        ' <table id="table" class="table table-bordered table-hover js-basic-example dataTable table-custom " style = "cursor: pointer;" > ' +
                        '<thead>' +
                        '<tr>' +
                        ' <th>' + "اسم الشركة " + ' </th>' +

                        ' <th>' + "رقم التصريح" + ' </th>' +
                        ' <th>' + " نوع التصريح  " + ' </th>' +
                        ' <th>' + "فرع " + '  </th>' +
                        '<th>' + "عنوان الموقع " + '  </th>' +
                        ' <th>' + "  تاريخ البدء" + ' </th>' +
                        ' <th>' + " الفترة " + ' </th>' +
                        '  <th>' + " تاريخ الإنتهاط " + '</th>' +
                        '  <th>' + "  حالة الطلب " + '</th>' +
                        '  <th>' + " تاريخ الطلب " + '</th>' +
                        '  <th>' + " " + '</th>' +

                        '</tr>' +
                        '</thead>' +
                        '<tbody id="rosss">' +

                        '</tbody>' +
                        '</table>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>');

                    for (var i = 0; i < response['data'].length; i++) {

                        $('#rosss').append(
                            '<tr><td>' + response['data'][i].companies.name + '</td><td>' + response['data'][i].permitnumber + '</td><td>' + response['data'][i].types_of_permits.name + '</td><td>' + response['data'][i].branches.name + '</td><td>' + response['data'][i].site_name + '</td><td>' + response['data'][i].permit_start_date + '</td><td>' + response['data'][i].permitـduration + '</td><td>' + response['data'][i].permit_end_date + '</td><td>' + response['data'][i].request_types.name + '</td><td>' + response['data'][i].created_at + '</td><td>' + response['data'][i].show + '</td></tr>');

                    }
                    $('#table').dataTable({
                        "language": {
                            "url": "../Arabic.json" //arbaic lang

                        },
                        "lengthMenu": [10, 50, 100, 150, 200, 250, 300, 350],
                        "bLengthChange": true, //thought this line could hide the LengthMenu
                        serverSide: false,
                        paging: true,
                        searching: false,
                        ordering: false,
                        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',



                        dom: 'Blfrtip',

                        buttons: [{
                                extend: 'copyHtml5',
                                exportOptions: {
                                    columns: [':visible']
                                },
                                text: 'نسخ'
                            },
                            {
                                extend: 'excelHtml5',
                                exportOptions: {
                                    columns: ':visible'
                                },
                                text: 'excel تصدير كـ '

                            },
                            {
                                extend: 'colvis',
                                text: 'الأعمدة'

                            },
                        ],

                    });


                }


            }
        });

    }
}