/** Attributes */ 
var DataGridCounter = 1;
var DynamicDataGridCounter = 1;
var clickAction = 0;
var uploadID = 0;
var GanttCounter = 1;

$("#step22, #next-attributs, #prev22").one("click", function () {
    if (clickAction == 0) {

        $(function () {
            var gridster;
            var grid_size = 100;
            var grid_margin = 10;
            var gridsterFunctoin = gridster = $(".gridster ul").gridster({
                widget_base_dimensions: ['auto', 140],
                autogenerate_stylesheet: true,
                min_cols: 1,
                max_cols: 6,
                widget_margins: [5, 5],
                draggable: {
                    handle: 'header i'
                },
                resize: {
                    enabled: true
                }
            }).data('gridster');



            $(document).on("click", ".delete-button", function () {
                var lilength = $('.gridster ul li.gs-w').length;
                //alert("li>>>>" + lilength);
                if (lilength == 1) {
                    setTimeout(function () {
                        $(".add-widget").removeClass("d-none");
                    }, 1000);

                }
                var gridster = $(".gridster ul").gridster().data('gridster');
                gridster.remove_widget($(this).closest("li"));
            });
            $(document).on("click", ".add-object-btn", function () {
                $(this).closest('li').children(".card-body").children(".sortable").addClass("this-input-container");
                $('#addInputModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            });

            $(document).on("click", ".addInoutBtn", function () {
                if ($('#Text_field').is(':checked')) {
                    $('.this-input-container').append("<div class='single-input-incard'><div class='single-canvas-card-actions'><a title='Move' class='canvas-resize-icon handle  size-confirm' href='#'></a><a class='input-edit-att-icon' title='Manage Attributes' href='#'><i class='fas fa-pen'></i></a><a title='Duplicate' class='canvas-copy-icon' href='#'><i class='fas fa-copy'></i></a><a title='Delete' class='canvas-delete-icon' href='#'><i class='fas fa-trash-alt'></i></a></div><div class='form-group mb-2'><label>Label</label><input type='text' class='form-control'></div></div>");
                }
                if ($('#Number').is(':checked')) {
                    $('.this-input-container').append("<div class='single-input-incard'><div class='single-canvas-card-actions'><a title='Resize' class='canvas-resize-icon handle  size-confirm' href='#'></a><a class='input-edit-att-icon' title='Manage Attributes' href='#'><i class='fas fa-pen'></i></a><a title='Duplicate' class='canvas-copy-icon' href='#'><i class='fas fa-copy'></i></a><a title='Delete' class='canvas-delete-icon' href='#'><i class='fas fa-trash-alt'></i></a></div><div class='form-group mb-2'><label>Number</label><input type='number' class='form-control'></div></div>");
                }
                if ($('#TextArea').is(':checked')) {
                    $('.this-input-container').append("<div class='single-input-incard'><div class='single-canvas-card-actions'><a title='Resize' class='canvas-resize-icon handle  size-confirm' href='#'><a class='input-edit-att-icon' title='Manage Attributes' href='#'><i class='fas fa-pen'></i></a><a title='Duplicate' class='canvas-copy-icon' href='#'><i class='fas fa-copy'></i></a><a title='Delete' class='canvas-delete-icon' href='#'><i class='fas fa-trash-alt'></i></a></div><div class='form-group mb-2'><label>Text Area</label><textarea class='form-control br-4px' rows='3'></textarea></div></div>");
                }
                if ($('#Date').is(':checked')) {
                    $('.this-input-container').append("<div class='single-input-incard'><div class='single-canvas-card-actions'><a title='Resize' class='canvas-resize-icon handle size-confirm' href='#'><a class='input-edit-att-icon' title='Manage Attributes' href='#'><i class='fas fa-pen'></i></a><a title='Delete' class='canvas-delete-icon' href='#'><i class='fas fa-trash-alt'></i></a></div><div class='form-group mb-2'><label>Date</label><input type='text' class='form-control datepicker'></div></div>");
                    $(".datepicker").datepicker();
                }
                if ($('#selectDDl').is(':checked')) {
                    $('.this-input-container').append("<div class='single-input-incard'><div class='single-canvas-card-actions'><a title='Resize' class='canvas-resize-icon handle size-confirm' href='#'><a class='select-edit-att-icon' title='Manage Attributes' href='#'><i class='fas fa-pen'></i></a><a title='Duplicate' class='canvas-copy-icon' href='#'><i class='fas fa-copy'></i></a><a title='Delete' class='canvas-delete-icon' href='#'><i class='fas fa-trash-alt'></i></a></div><div class='form-group mb-2'><label>Select</label><select class='form-control' style='width:100% !important;'></select></div></div>");
                }
                if ($('#CheckboxInput').is(':checked')) {
                    $('.this-input-container').append("<div class='single-input-incard'><div class='single-canvas-card-actions'><a title='Resize' class='canvas-resize-icon handle size-confirm' href='#'><a class='checkbox-edit-att-icon' title='Manage Attributes' href='#'><i class='fas fa-pen'></i></a><a title='Delete' class='canvas-delete-icon' href='#'><i class='fas fa-trash-alt'></i></a></div><div class='form-group mb-2'><label class='mainLabel'>Checkbox</label><div class='form-check mb-1'><input type='checkbox' class='form-check-input' id='customCheck'><label class='pt-1 checkbox-label' for='customCheck'>Option name</label></div></div></div>");
                }
                if ($('#radioBtn').is(':checked')) {
                    $('.this-input-container').append("<div class='single-input-incard'><div class='single-canvas-card-actions'><a title='Resize' class='canvas-resize-icon handle size-confirm' href='#'><a class='Radio-edit-att-icon' title='Manage Attributes' href='#'><i class='fas fa-pen'></i></a><a title='Delete' class='canvas-delete-icon' href='#'><i class='fas fa-trash-alt'></i></a></div><div class='form-group mb-2'><label class='mainLabel'>Redio</label><div class='form-check mb-1'><input type='radio' class='form-check-input' id='radio1'><label class='pt-1 checkbox-label' for='radio1'>Option name</label></div></div></div>");
                }
                if ($('#DataGrid').is(':checked')) {
                    DataGridCounter++;
                    var NewDataGrid = "NewDataGrid" + DataGridCounter;
                    $('.this-input-container').append("<div class='single-input-incard pt-4'><div class='single-canvas-card-actions'><a title='Resize' class='canvas-resize-icon handle size-confirm' href='#'><a class='input-edit-att-icon' title='Manage Attributes' href='#'><i class='fas fa-pen'></i></a><a title='Delete' class='canvas-delete-icon' href='#'><i class='fas fa-trash-alt'></i></a></div><div id='" + NewDataGrid + "'></div></div>");


                    $(function () {
                        $('#' + NewDataGrid).dxDataGrid({
                            dataSource: employees,
                            keyExpr: "ID",
                            showBorders: true,
                            paging: {
                                pageSize: 5
                            },
                            editing: {
                                mode: "row",
                                allowUpdating: true,
                                allowDeleting: true,
                                allowAdding: true
                            },
                            columns: [
                                {
                                    dataField: "Prefix",
                                    caption: "Title"
                                }, "FirstName",
                                "LastName", {
                                    dataField: "Position",
                                    width: 130
                                }, {
                                    dataField: "StateID",
                                    caption: "State",
                                    width: 125,
                                    lookup: {
                                        dataSource: states,
                                        displayExpr: "Name",
                                        valueExpr: "ID"
                                    }
                                }, {
                                    dataField: "BirthDate",
                                    dataType: "date",
                                    width: 125
                                },
                            ]
                        });
                    });

                    $('#manageSingleCanvasObject').modal({
                        backdrop: 'static',
                        keyboard: false
                    })
                }


                if ($('#tasksBoard').is(':checked')) {

                    $('.this-input-container').append('<div class="row mb-2"> <div class="col-sm-12 col-md-9"> <ul class="task-list d-flex"> <li class="Active"><a href="#">My Tasks</a></li> <li><a href="#">Assigned By Me</a></li> <li><a href="#">Followed By Me</a></li> <li><a href="#">Created By Me</a></li> <li><a href="#">Completed</a></li> </ul> </div> <div class="col-sm-12 col-md-3"> <button class="btn btn-default addNewBoardColumn float-right"> <img class="mr-1" src="assets/images/add-white.svg"> Add Column </button> </div> </div> <div class="scrumboard"> <div class="row d-flex"> <div class="col column flex pt-4"> <h5 class="task-header">New</h5> <span class="remove-board-col ml-2"><i class="fas fa-trash-alt"></i></span> <div class="portlet to_do"> <div class="portlet-header"> <div class="row"> <div class="col-sm-12- col-md-6"> <a href="#">Task title goes here</a> </div> <div class="col-sm-12- col-md-6"> <a class="close-card task-icon float-right" href="#"><i class="fas fa-times"></i></a> <a class="task-icon float-right" href="#"><i class="fas fa-pencil-alt"></i></a> <a class="move-card task-icon float-right" href="#"><i class="fas fa-arrows-alt"></i></a> </div> </div> </div> <div class="portlet-content"> <p> Description goes here in this area dummy text lorem ipsum. </p> <div class="row"> <div class="col-sm-12 col-md-12"> <h6><span class="task-user-icon"> <i class="fas fa-user"></i></span>Assigned by: <strong>Mohammad Ali</strong></h6> </div> </div> <div class="row"> <div class="col-sm-12 col-md-12"> <h6><span class="task-user-icon"> <i class="fas fa-calendar-alt"></i></span>Due date: <strong>12/11/2018</strong></h6> </div> </div> <div class="row"> <div class="col-sm-10"> <div class="progress"> <div class="progress-bar progress-bar-success" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width:70%"> </div> </div> </div> <div class="col-sm-2"> <h6>70%</h6></div> </div> </div> </div> <div class="portlet to_do"> <div class="portlet-header"> <div class="row"> <div class="col-sm-12- col-md-6"> <a href="#">Task title</a> </div> <div class="col-sm-12- col-md-6"> <a class="close-card task-icon float-right" href="#"><i class="fas fa-times"></i></a> <a class="task-icon float-right" href="#"><i class="fas fa-pencil-alt"></i></a> <a class="move-card task-icon float-right" href="#"><i class="fas fa-arrows-alt"></i></a> </div> </div> </div> <div class="portlet-content"> <p> Description goes here in this area dummy text lorem ipsum. </p> <div class="row"> <div class="col-sm-12 col-md-12"> <h6><span class="task-user-icon"> <i class="fas fa-user"></i></span>Assigned by: <strong>Mohammad Ali</strong></h6> </div> </div> <div class="row"> <div class="col-sm-12 col-md-12"> <h6><span class="task-user-icon"> <i class="fas fa-calendar-alt"></i></span>Due date: <strong>12/11/2018</strong></h6> </div> </div> <div class="row"> <div class="col-sm-10"> <div class="progress"> <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width:50%"> </div> </div> </div> <div class="col-sm-2"> <h6>50%</h6></div> </div> </div> </div> </div> <div class="col column flex pt-4"> <h5 class="task-header">In Progress</h5> <span class="remove-board-col ml-2"><i class="fas fa-trash-alt"></i></span> <div class="portlet inProgress"> <div class="portlet-header"> <div class="row"> <div class="col-sm-12- col-md-6"> <a href="#">Task title</a> </div> <div class="col-sm-12- col-md-6"> <a class="close-card task-icon float-right" href="#"><i class="fas fa-times"></i></a> <a class="task-icon float-right" href="#"><i class="fas fa-pencil-alt"></i></a> <a class="move-card task-icon float-right" href="#"><i class="fas fa-arrows-alt"></i></a> </div> </div> </div> <div class="portlet-content"> <p> Description goes here in this area dummy text lorem ipsum. </p> <div class="row"> <div class="col-sm-12 col-md-12"> <h6><span class="task-user-icon"> <i class="fas fa-user"></i></span>Assigned by: <strong>Mohammad Ali</strong></h6> </div> </div> <div class="row"> <div class="col-sm-12 col-md-12"> <h6><span class="task-user-icon"> <i class="fas fa-calendar-alt"></i></span>Due date: <strong>12/11/2018</strong></h6> </div> </div> <div class="row"> <div class="col-sm-10"> <div class="progress"> <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width:50%"> </div> </div> </div> <div class="col-sm-2"> <h6>50%</h6></div> </div> </div> </div> <div class="portlet inProgress"> <div class="portlet-header"> <div class="row"> <div class="col-sm-12- col-md-6"> <a href="#">Task title</a> </div> <div class="col-sm-12- col-md-6"> <a class="close-card task-icon float-right" href="#"><i class="fas fa-times"></i></a> <a class="task-icon float-right" href="#"><i class="fas fa-pencil-alt"></i></a> <a class="move-card task-icon float-right" href="#"><i class="fas fa-arrows-alt"></i></a> </div> </div> </div> <div class="portlet-content"> <p> Description goes here in this area dummy text lorem ipsum. </p> <div class="row"> <div class="col-sm-12 col-md-12"> <h6><span class="task-user-icon"> <i class="fas fa-user"></i></span>Assigned by: <strong>Mohammad Ali</strong></h6> </div> </div> <div class="row"> <div class="col-sm-12 col-md-12"> <h6><span class="task-user-icon"> <i class="fas fa-calendar-alt"></i></span>Due date: <strong>12/11/2018</strong></h6> </div> </div> <div class="row"> <div class="col-sm-10"> <div class="progress"> <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width:30%"> </div> </div> </div> <div class="col-sm-2"> <h6>30%</h6></div> </div> </div> </div> </div> <div class="col column flex pt-4"> <h5 class="task-header">Done</h5> <span class="remove-board-col ml-2"><i class="fas fa-trash-alt"></i></span> <div class="portlet done"> <div class="portlet-header"> <div class="row"> <div class="col-sm-12- col-md-6"> <a href="#">Task title</a> </div> <div class="col-sm-12- col-md-6"> <a class="close-card task-icon float-right" href="#"><i class="fas fa-times"></i></a> <a class="task-icon float-right" href="#"><i class="fas fa-pencil-alt"></i></a> <a class="move-card task-icon float-right" href="#"><i class="fas fa-arrows-alt"></i></a> </div> </div> </div> <div class="portlet-content"> <p> Description goes here in this area dummy text lorem ipsum. </p> <div class="row"> <div class="col-sm-12 col-md-12"> <h6><span class="task-user-icon"> <i class="fas fa-user"></i></span>Assigned by: <strong>Mohammad Ali</strong></h6> </div> </div> <div class="row"> <div class="col-sm-12 col-md-12"> <h6><span class="task-user-icon"> <i class="fas fa-calendar-alt"></i></span>Due date: <strong>12/11/2018</strong></h6> </div> </div> <div class="row"> <div class="col-sm-10"> <div class="progress"> <div class="progress-bar progress-bar-success" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width:70%"> </div> </div> </div> <div class="col-sm-2"> <h6>70%</h6></div> </div> </div> </div> </div> </div> </div>');
                    $(function () {
                        $(".column").sortable({
                            connectWith: ".column",
                            handle: ".portlet-header",
                            cancel: ".portlet-toggle",
                            placeholder: "portlet-placeholder ui-corner-all"
                        });

                        $(".portlet")
                            .addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
                            .find(".portlet-header")
                            .addClass("ui-widget-header ui-corner-all")


                        $(".portlet-toggle").click(function () {
                            var icon = $(this);
                            icon.toggleClass("ui-icon-minusthick ui-icon-plusthick");
                            icon.closest(".portlet").find(".portlet-content").toggle();
                        });
                    });

                    $('.close-card').click(function () {
                        var $target = $(this).parents('.portlet');
                        $target.hide('', function () { $target.remove(); });
                    })

                    $('#manageGanntData').modal({
                        backdrop: 'static',
                        keyboard: false
                    });

                }

                $(document).on("click", ".remove-board-col", function () {
                    $(this).closest('.column').remove();
                });
                $(document).on("click", ".addNewBoardColumn", function () {
                    $('.scrumboard').children('.row.d-flex').append('<div class="col column flex pt-4 ui-sortable"><h5 class="task-header thisColTitle">Column Title</h5><span class="remove-board-col ml-2" style=""><i class="fas fa-trash-alt"></i></span></div>');


                    $(".column").sortable({
                        connectWith: ".column",
                        handle: ".portlet-header",
                        cancel: ".portlet-toggle",
                        placeholder: "portlet-placeholder ui-corner-all"
                    });

                    $(".portlet")
                        .addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
                        .find(".portlet-header")
                        .addClass("ui-widget-header ui-corner-all")


                    $(".portlet-toggle").click(function () {
                        var icon = $(this);
                        icon.toggleClass("ui-icon-minusthick ui-icon-plusthick");
                        icon.closest(".portlet").find(".portlet-content").toggle();
                    });

                    $('#AddBoaedColModal').modal({
                        backdrop: 'static',
                        keyboard: false
                    });
                });

                $(document).on("click", "#SaveNewBoardColumn", function () {
                    $(".thisColTitle").text($("#boardTitle").val());
                    $(".thisColTitle").removeClass("thisColTitle");
                });

                if ($('#Gantt').is(':checked')) {
                    GanttCounter++;
                    var NewGantt = "NewGantt" + GanttCounter;
                    $('.this-input-container').append('<div style="height: 500px;"  id="' + NewGantt + '"></div>');

                    var cols = [{
                        dataField: "title",
                        caption: "Subject",
                        width: 200
                    }, {
                        dataField: "start",
                        caption: "Start Date"
                    }, {
                        dataField: "end",
                        caption: "End Date"
                    }];
                    var ganttContent;

                    ganttContent = function () {

                        $('#' + NewGantt).dxGantt({
                            tasks: {
                                dataSource: tasks
                            },
                            dependencies: {
                                dataSource: dependencies
                            },
                            resources: {
                                dataSource: resources
                            },
                            resourceAssignments: {
                                dataSource: resourceAssignments
                            },
                            editing: {
                                enabled: true
                            },
                            validation: {
                                autoUpdateParentTasks: true
                            },
                            toolbar: {
                                items: [
                                    "undo",
                                    "redo",
                                    "separator",
                                    "collapseAll",
                                    "expandAll",
                                    "separator",
                                    "addTask",
                                    "deleteTask",
                                    "separator",
                                    "zoomIn",
                                    "zoomOut",
                                    {
                                        widget: "dxButton",
                                        options: {
                                            text: "Manage Columns",
                                            icon: "info",
                                            stylingMode: "text",
                                            onClick: function () {
                                                $('#AddNewGanttCol').modal({
                                                    backdrop: 'static',
                                                    keyboard: false
                                                });

                                                $(document).on("click", "#SubmitGanttCol", function () {
                                                    cols = [];
                                                    var GanttValues = $('select.selectd-cols').children("option:selected").map(function () {
                                                        return this.value;
                                                    }).get();

                                                    var GanttText = $('select.selectd-cols').children("option:selected").map(function () {
                                                        return this.text;
                                                    }).get();

                                                    for (var i = 0; i < GanttValues.length; i++) {
                                                        cols.push({
                                                            dataField: GanttValues[i],
                                                            caption: GanttText[i],
                                                            width: 100
                                                        });
                                                        ganttContent();
                                                    }
                                                });
                                            }
                                        }
                                    }
                                ]
                            },
                            columns: cols,
                            scaleType: "weeks",
                            taskListWidth: 500
                        });
                    };
                    ganttContent();

                    $('#manageGanntData').modal({
                        backdrop: 'static',
                        keyboard: false
                    })

                }


                if ($('#DynamicDataGrid').is(':checked')) {
                    DynamicDataGridCounter++;
                    var NewDynamicDataGrid = "NewDynamicDataGrid" + DynamicDataGridCounter;
                    $('.this-input-container').append("<div class='single-input-incard'><div class='single-canvas-card-actions'><a title='Resize' class='canvas-resize-icon handle size-confirm' href='#'><a title='Duplicate' class='canvas-copy-icon' href='#'><i class='fas fa-copy'></i></a><a class='table-edit-att-icon' title='Manage Attributes' href='#'><i class='fas fa-pen'></i></a><a title='Delete' class='canvas-delete-icon' href='#'><i class='fas fa-trash-alt'></i></a></div><div class='form-group mb-2 this-single-input'><table id='" + NewDynamicDataGrid + "' class='table table-striped table-hover mb-0 dynamic-table-main' style='width:100%'><thead><tr></tr></thead><tbody></tbody><tfoot><tr></tr></tfoot></table><div class='add-row-action p-3'> <i class='fas fa-plus mr-1'></i> Add Row </div></div></div>");

                    $('#manageSingleTableObject').modal({
                        backdrop: 'static',
                        keyboard: false
                    })


                    //Add Row to Table

                    $(".add-row-action").click(function () {
                        $(this).siblings('table').addClass("thisTable");
                        var thisTable = $(this).siblings('table').children('tbody');
                        $('<tr/>')
                            .addClass('tr')
                            .appendTo(thisTable);

                        var arrColInput = $('.thisTable input.col-input:text').map(function () {
                            return this.value;
                        }).get();

                        for (var i = 0; i < arrColInput.length; i++) {
                            var newtd = $('<td/>')
                                .addClass('td')
                                .appendTo('.thisTable tbody tr:last');

                            var tdValue = $('<label/>')
                                .text(arrColInput[i])
                                .appendTo(newtd);
                        }

                        $('.thisTable tbody tr:last td:last').append('<span class="remove-tr ml-2"><i class="fas fa-trash-alt"></i></span>');

                        $(document).on("click", ".remove-tr", function () {
                            $(this).closest('tr').remove();
                        });


                        $('table.thisTable').removeClass('thisTable');

                    });
                }


                if ($('#fileUpload').is(':checked')) {
                    uploadID++;
                    $('.this-input-container').append("<div class='single-input-incard'><div class='single-canvas-card-actions'><a title='Resize' class='canvas-resize-icon handle size-confirm' href='#'><a class='input-edit-att-icon' title='Manage Attributes' href='#'><i class='fas fa-pen'></i></a><a title='Delete' class='canvas-delete-icon' href='#'><i class='fas fa-trash-alt'></i></a></div><div class='form-group mb-2'><label class='mainLabel'>File Upload</label><div method='post' action='/upload' class='dropzone' id='ID" + uploadID + "'></div></div>");


                    $("#ID" + uploadID).dropzone();

                }

                $(".sortable.this-input-container").removeClass("this-input-container");
            });

            //$(document).on("click", ".canvas-resize-icon", function () {

            //    if ($(this).closest(".single-input-incard").hasClass("w-25")) {
            //        $(this).closest(".single-input-incard").css("width", "33.33333%");
            //        $(this).closest(".single-input-incard").addClass("w-33");
            //        $(this).closest(".single-input-incard").removeClass("w-25");
            //        $(this).closest(".single-input-incard").removeClass("w-75");
            //        $(this).closest(".single-input-incard").removeClass("w-50");
            //        $(this).closest(".single-input-incard").removeClass("w-100");
            //    }
            //    else if ($(this).closest(".single-input-incard").hasClass("w-33")) {
            //        $(this).closest(".single-input-incard").css("width", "50%");
            //        $(this).closest(".single-input-incard").addClass("w-50");
            //        $(this).closest(".single-input-incard").removeClass("w-25");
            //        $(this).closest(".single-input-incard").removeClass("w-75");
            //        $(this).closest(".single-input-incard").removeClass("w-33");
            //        $(this).closest(".single-input-incard").removeClass("w-100");
            //    }
            //    else if ($(this).closest(".single-input-incard").hasClass("w-50")) {
            //        $(this).closest(".single-input-incard").css("width", "75%");
            //        $(this).closest(".single-input-incard").addClass("w-75");
            //        $(this).closest(".single-input-incard").removeClass("w-25");
            //        $(this).closest(".single-input-incard").removeClass("w-50");
            //        $(this).closest(".single-input-incard").removeClass("w-33");
            //        $(this).closest(".single-input-incard").removeClass("w-100");
            //    }
            //    else if ($(this).closest(".single-input-incard").hasClass("w-75")) {
            //        $(this).closest(".single-input-incard").css("width", "100%");
            //        $(this).closest(".single-input-incard").addClass("w-100");
            //        $(this).closest(".single-input-incard").removeClass("w-25");
            //        $(this).closest(".single-input-incard").removeClass("w-50");
            //        $(this).closest(".single-input-incard").removeClass("w-33");
            //        $(this).closest(".single-input-incard").removeClass("w-75");
            //    }
            //    else if ($(this).closest(".single-input-incard").hasClass("w-100")) {
            //        $(this).closest(".single-input-incard").css("width", "25%");
            //        $(this).closest(".single-input-incard").addClass("w-25");
            //        $(this).closest(".single-input-incard").removeClass("w-100");
            //        $(this).closest(".single-input-incard").removeClass("w-50");
            //        $(this).closest(".single-input-incard").removeClass("w-33");
            //        $(this).closest(".single-input-incard").removeClass("w-75");
            //    }
            //    else {
            //        $(this).closest(".single-input-incard").css("width", "25%");
            //        $(this).closest(".single-input-incard").addClass("w-25");
            //    }

            //});

            $(document).on("click", ".canvas-copy-icon", function () {
                var thisInput = $(this).closest('.single-input-incard').html();
                $(this).closest('.sortable').append("<div class='single-input-incard'>" + thisInput + "</div>");
            });
            $(document).on("click", ".canvas-delete-icon", function () {
                $(this).closest('.single-input-incard').remove();
            });

            $(document).on("click", ".remove-icon", function () {
                $(this).closest('.form-group').remove();
            });


            //Text Field

            $(document).on("click", ".input-edit-att-icon", function () {
                $(this).closest('.single-input-incard').children(".form-group").addClass("this-single-input");
                var lblName = $(this).closest('.single-input-incard').children(".form-group").children("label").text();
                $("#lblInput").val(lblName);
                $('#manageSingleCanvasObject').modal({
                    backdrop: 'static',
                    keyboard: false
                })
            });

            $(document).on("click", ".table-edit-att-icon", function () {
                $(this).closest('.single-input-incard').children(".form-group").addClass("this-single-input");
                $('#manageSingleTableObject').modal({
                    backdrop: 'static',
                    keyboard: false
                })
            });



            $(document).on("click", "#saveObjectChanges", function () {
                $(".this-single-input label").text($("#lblInput").val());

                if ($('#Required').is(':checked')) {
                    $(".this-single-input").addClass("error");
                }
                else {
                    $(".this-single-input").removeClass("error");
                }
                $('.form-group.this-single-input').removeClass("this-single-input");
            });
            $("#closeObjectBtn").click(function () {
                $('.form-group.this-single-input').removeClass("this-single-input");
            });


            //Select
            $(document).on("click", ".select-edit-att-icon", function () {
                $(this).closest('.single-input-incard').children(".form-group").addClass("this-single-input");
                var SelectLblName = $(this).closest('.single-input-incard').children(".form-group").children("label").text();
                $("#lblselectDDl").val(SelectLblName);
                $('#manageSingleSelect').modal({
                    backdrop: 'static',
                    keyboard: false
                })
            });
            $(document).on("click", ".addNewOptionSelect", function () {
                var newOption = "<div class='form-group'><div class='row'><div class='col-sm-5'><label class='d-block'>Option name En</label><input type='text' class='form-control float-left option-name'></div><div class='col-sm-5'><label class='d-block'>Option name Ar</label><input type='text' class='form-control float-left'></div><span class='remove-icon ml-2'><i class='fas fa-times'></i></span></div></div>";
                $(newOption).insertBefore($(this).closest(".addNewOptionSelect"));

            });

            $(document).on("click", ".addNewOptionGantt", function () {
                var newOption = '<div class="form-group"> <div class="row"> <div class="col-sm-11"> <label>Select Column</label> <select class="form-control selectd-cols"> <option value="title">Subject</option> <option value="start">Start Date</option> <option value="end">End Date</option> <option value="progress">Progress</option> </select> </div> <span class="remove-icon ml-2"> <i class="fas fa-times"></i> </span> </div></div>';
                $(newOption).insertBefore($(this).closest(".addNewOptionGantt"));

            });

            $(document).on("click", "#saveSelectChanges", function () {
                $(".this-single-input label").text($("#lblselectDDl").val());

                if ($('#RequiredSelect').is(':checked')) {
                    $(".this-single-input").addClass("error");
                }
                else {
                    $(".this-single-input").removeClass("error");
                }

                $('.this-single-input select').find('option').remove();

                var arr = $('input.option-name:text').map(function () {
                    return this.value;
                }).get();

                for (var i = 0; i < arr.length; i++) {
                    jQuery('<option/>', {
                        value: arr[i],
                        html: arr[i]
                    }).appendTo('.this-single-input select');
                }

                $('.form-group.this-single-input').removeClass("this-single-input");
            });
            $("#closeSelectBtn").click(function () {
                $('.form-group.this-single-input').removeClass("this-single-input");
            });



            //Chckbox

            $(document).on("click", ".addNewOptionCheckbox", function () {
                var newOption = "<div class='form-group'><div class='row'><div class='col-sm-5'><label class='d-block'>Option name En</label><input type='text' class='form-control float-left optionCheckbox-name'></div><div class='col-sm-5'><label class='d-block'>Option name Ar</label><input type='text' class='form-control float-left'></div><span class='remove-icon ml-2'><i class='fas fa-times'></i></span></div></div>";
                $(newOption).insertBefore($(this).closest(".addNewOptionCheckbox"));

            });


            $(document).on("click", ".checkbox-edit-att-icon", function () {
                $(this).closest('.single-input-incard').children(".form-group").addClass("this-single-input");
                var checkLblName = $(this).closest('.single-input-incard').children(".form-group").children("label.mainLabel").text();
                $("#lblCheckbox").val(checkLblName);
                $('#manageSingleCheckbox').modal({
                    backdrop: 'static',
                    keyboard: false
                })
            });

            $(document).on("click", "#saveCheckboxChanges", function () {
                $(".this-single-input label.mainLabel").text($("#lblCheckbox").val());

                if ($('#RequiredCheckbox').is(':checked')) {
                    $(".this-single-input").addClass("error");
                }
                else {
                    $(".this-single-input").removeClass("error");
                }

                $('.this-single-input').children(".form-check").remove();


                var arr2 = $('input.optionCheckbox-name:text').map(function () {
                    return this.value;
                }).get();

                for (var i = 0; i < arr2.length; i++) {
                    var div = $('<div/>')
                        .addClass('form-check mb-1')
                        .appendTo('.single-input-incard .this-single-input');

                    var input = $('<input/>')
                        .addClass('form-check-input')
                        .attr('type', 'checkbox')
                        .attr('id', arr2[i])
                        .attr('value', arr2[i])
                        .appendTo(div);

                    var lbl = $('<label/>')
                        .addClass('pt-1')
                        .addClass('checkbox-label')
                        .text(arr2[i])
                        .attr('for', arr2[i])
                        .appendTo(div);
                }



                $('.form-group.this-single-input').removeClass("this-single-input");
            });
            $("#closeCheckboxBtn").click(function () {
                $('.form-group.this-single-input').removeClass("this-single-input");
            });




            //Radio button

            $(document).on("click", ".addNewOptionRadio", function () {
                var newOption = "<div class='form-group'><div class='row'><div class='col-sm-5'><label class='d-block'>Option name En</label><input type='text' class='form-control float-left optionRadio-name'></div><div class='col-sm-5'><label class='d-block'>Option name Ar</label><input type='text' class='form-control float-left'></div><span class='remove-icon ml-2'><i class='fas fa-times'></i></span></div></div>";
                $(newOption).insertBefore($(this).closest(".addNewOptionRadio"));

            });


            $(document).on("click", ".Radio-edit-att-icon", function () {
                $(this).closest('.single-input-incard').children(".form-group").addClass("this-single-input");
                var RadioLblName = $(this).closest('.single-input-incard').children(".form-group").children("label.mainLabel").text();
                $("#lblRadio").val(RadioLblName);
                $('#manageSingleRadio').modal({
                    backdrop: 'static',
                    keyboard: false
                })
            });

            var radioGroup = 1;
            $(document).on("click", "#saveRadioChanges", function () {
                $(".this-single-input label.mainLabel").text($("#lblRadio").val());

                if ($('#RequiredRadio').is(':checked')) {
                    $(".this-single-input").addClass("error");
                }
                else {
                    $(".this-single-input").removeClass("error");
                }

                $('.this-single-input').children(".form-check").remove();


                var arr3 = $('input.optionRadio-name:text').map(function () {
                    return this.value;
                }).get();

                for (var i = 0; i < arr3.length; i++) {

                    var div = $('<div/>')
                        .addClass('form-check mb-1')
                        .appendTo('.single-input-incard .this-single-input');

                    var input = $('<input/>')
                        .addClass('form-check-input')
                        .attr('type', 'radio')
                        .attr('name', 'optradio' + radioGroup)
                        .attr('id', arr3[i] + radioGroup)
                        .attr('value', arr3[i] + radioGroup)
                        .appendTo(div);

                    var lbl = $('<label/>')
                        .addClass('pt-1')
                        .addClass('checkbox-label')
                        .text(arr3[i])
                        .attr('for', arr3[i] + radioGroup)
                        .appendTo(div);
                }

                radioGroup++;
                $('.form-group.this-single-input').removeClass("this-single-input");
            });
            $("#closeRadioBtn").click(function () {
                $('.form-group.this-single-input').removeClass("this-single-input");
            });


            //Add Dynamic Table
            $(document).on("click", ".addNewOptionTable", function () {
                var newOption = "<div class='form-group'><div class='row'><div class='col-sm-6'><label class='d-block'>Column name</label><input type='text' class='form-control float-left optionsTable-name'></div><span class='remove-icon ml-2'><i class='fas fa-times'></i></span></div></div>";
                $(newOption).insertBefore($(this).closest(".addNewOptionTable"));

            });

            var tableGroup = 1;
            $(document).on("click", "#saveTableChanges", function () {


                var arr44 = $('input.optionsTable-name:text').map(function () {
                    return this.value;
                }).get();

                $('.this-single-input').children("table").children("thead").children("tr").children("th").remove();
                $('.this-single-input').children("table").children("tbody").children("tr").children("td").remove();
                $('.this-single-input').children("table").children("tfoot").children("tr").children("td").remove();



                for (var i = 0; i < arr44.length; i++) {

                    var th = $('<th/>')
                        .addClass('th')
                        .attr('id', arr44[i] + tableGroup)
                        .appendTo('.single-input-incard .this-single-input table thead tr');

                    var span = $('<span/>')
                        .addClass('span')
                        .text(arr44[i])
                        .appendTo(th);
                }

                for (var i = 0; i < arr44.length; i++) {

                    var Subtd = $('<td/>')
                        .addClass('td')
                        .attr('id', arr44[i] + tableGroup)
                        .appendTo('.single-input-incard .this-single-input table tfoot tr');
                    var input = $('<input/>')
                        .addClass('form-control col-input')
                        .attr('type', 'text')
                        .appendTo(Subtd);
                }

                tableGroup++;
                $('.form-group.this-single-input').removeClass("this-single-input");
            });
            $("#closeTableBtn").click(function () {
                $('.form-group.this-single-input').removeClass("this-single-input");
            });


            //End Add Dynamic Table




            //Manage Card
            $(document).on("click", ".manage-card-btn", function () {
                $(this).closest('li').addClass("active-canvas-card");
                var cardTitle = $(this).closest('li').children('.card-header').children('.card-title').text();
                $("#cardTitleInput").val(cardTitle);

                $('#manageCardModal').modal({
                    backdrop: 'static',
                    keyboard: false
                })
            });

            $(document).on("click", "#saveCardChanges", function () {
                $(".active-canvas-card .card-header .card-title").text($("#cardTitleInput").val());
                var newColor = $("#newColorCode").val();
                $(".active-canvas-card").css("background-color", newColor);
                $('li.active-canvas-card').removeClass("active-canvas-card");
            });

            $("#closeBtn").click(function () {
                $('li.active-canvas-card').removeClass("active-canvas-card");
            });
            var num = 1;
            $(document).on("click", ".addNewBox", function () {
                var thisGridster = $(this).closest('.tab-pane').children('.gridster').children('ul');
                //$(".add-widget").addClass("d-none");

                Newgridster = thisGridster.gridster({
                    widget_base_dimensions: ['auto', 140],
                    autogenerate_stylesheet: true,
                    min_cols: 1,
                    max_cols: 6,
                    widget_margins: [5, 5],
                    draggable: {
                        handle: 'header i'
                    },
                    resize: {
                        enabled: true
                    }
                }).data('gridster');


                Newgridster
                    .add_widget("<li><div class='card-header'><h4 class='card-title'>Card Title</h4><div class='main-card-actions d-flex'><div><header class='handler'><i class='fas fa-arrows-alt'></i></header></div><div class='dropdown d-inline-block single-card-actions'><span class='actions-ddl' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'><i class='fas fa-ellipsis-h'></i></span><div class='dropdown-menu' aria-labelledby='dropdownMenuButton'><a class='dropdown-item manage-card-btn' href='#'>Manage card</a><a class='dropdown-item add-object-btn' href='#'>Add new Input</a><div class='dropdown-divider'></div><a class='dropdown-item text-danger delete-button' href='#'>Delete card</a></div></div></div></div><div class='card-body p-2'><div class='sortable' id='sortable" + num + "'></li>", 6, 2);
                Newgridster.resizable({
                    grid: [grid_size + (grid_margin * 2), grid_size + (grid_margin * 2)],
                    animate: false,
                    minWidth: grid_size,
                    minHeight: grid_size,
                    containment: '#layouts_grid ul',
                    autoHide: true,
                    stop: function (event, ui) {
                        var resized = $(this);
                        setTimeout(function () {
                            resizeBlock(resized);
                        }, 300);
                    }
                });

                if (num == 1) {

                    dragula([sortable1], {
                        moves: function (el, container, handle) {
                            return handle.classList.contains('handle');
                        }
                    });

                }
                if (num == 2) {
                    dragula([sortable2], {
                        moves: function (el, container, handle) {
                            return handle.classList.contains('handle');
                        }
                    });
                }

                if (num == 3) {
                    dragula([sortable3], {
                        moves: function (el, container, handle) {
                            return handle.classList.contains('handle');
                        }
                    });
                }
                if (num == 4) {
                    dragula([sortable4], {
                        moves: function (el, container, handle) {
                            return handle.classList.contains('handle');
                        }
                    });
                }
                if (num == 5) {
                    dragula([sortable5], {
                        moves: function (el, container, handle) {
                            return handle.classList.contains('handle');
                        }
                    });
                }
                if (num == 6) {
                    dragula([sortable6], {
                        moves: function (el, container, handle) {
                            return handle.classList.contains('handle');
                        }
                    });
                }
                if (num == 7) {
                    dragula([sortable7], {
                        moves: function (el, container, handle) {
                            return handle.classList.contains('handle');
                        }
                    });
                }
                if (num == 8) {
                    dragula([sortable8], {
                        moves: function (el, container, handle) {
                            return handle.classList.contains('handle');
                        }
                    });
                }
                if (num == 9) {
                    dragula([sortable9], {
                        moves: function (el, container, handle) {
                            return handle.classList.contains('handle');
                        }
                    });
                }
                if (num == 10) {
                    dragula([sortable10], {
                        moves: function (el, container, handle) {
                            return handle.classList.contains('handle');
                        }
                    });
                }
                if (num == 11) {
                    dragula([sortable11], {
                        moves: function (el, container, handle) {
                            return handle.classList.contains('handle');
                        }
                    });
                }
                if (num == 12) {
                    dragula([sortable12], {
                        moves: function (el, container, handle) {
                            return handle.classList.contains('handle');
                        }
                    });
                }
                if (num == 13) {
                    dragula([sortable14], {
                        moves: function (el, container, handle) {
                            return handle.classList.contains('handle');
                        }
                    });
                }
                if (num == 14) {
                    dragula([sortable14], {
                        moves: function (el, container, handle) {
                            return handle.classList.contains('handle');
                        }
                    });
                }
                if (num == 15) {
                    dragula([sortable15], {
                        moves: function (el, container, handle) {
                            return handle.classList.contains('handle');
                        }
                    });
                }
                if (num == 16) {
                    dragula([sortable16], {
                        moves: function (el, container, handle) {
                            return handle.classList.contains('handle');
                        }
                    });
                }
                if (num == 17) {
                    dragula([sortable17], {
                        moves: function (el, container, handle) {
                            return handle.classList.contains('handle');
                        }
                    });
                }
                if (num == 18) {
                    dragula([sortable18], {
                        moves: function (el, container, handle) {
                            return handle.classList.contains('handle');
                        }
                    });
                }
                if (num == 19) {
                    dragula([sortable19], {
                        moves: function (el, container, handle) {
                            return handle.classList.contains('handle');
                        }
                    });
                }
                if (num == 20) {
                    dragula([sortable20], {
                        moves: function (el, container, handle) {
                            return handle.classList.contains('handle');
                        }
                    });
                }
                if (num == 21) {
                    dragula([sortable21], {
                        moves: function (el, container, handle) {
                            return handle.classList.contains('handle');
                        }
                    });
                }
                if (num == 22) {
                    dragula([sortable22], {
                        moves: function (el, container, handle) {
                            return handle.classList.contains('handle');
                        }
                    });
                }
                if (num == 23) {
                    dragula([sortable23], {
                        moves: function (el, container, handle) {
                            return handle.classList.contains('handle');
                        }
                    });
                }
                if (num == 24) {
                    dragula([sortable24], {
                        moves: function (el, container, handle) {
                            return handle.classList.contains('handle');
                        }
                    });
                }
                if (num == 25) {
                    dragula([sortable25], {
                        moves: function (el, container, handle) {
                            return handle.classList.contains('handle');
                        }
                    });
                }
                if (num == 26) {
                    dragula([sortable26], {
                        moves: function (el, container, handle) {
                            return handle.classList.contains('handle');
                        }
                    });
                }
                if (num == 27) {
                    dragula([sortable27], {
                        moves: function (el, container, handle) {
                            return handle.classList.contains('handle');
                        }
                    });
                }
                if (num == 28) {
                    dragula([sortable28], {
                        moves: function (el, container, handle) {
                            return handle.classList.contains('handle');
                        }
                    });
                }
                if (num == 29) {
                    dragula([sortable29], {
                        moves: function (el, container, handle) {
                            return handle.classList.contains('handle');
                        }
                    });
                }
                if (num == 30) {
                    dragula([sortable30], {
                        moves: function (el, container, handle) {
                            return handle.classList.contains('handle');
                        }
                    });
                }
                num++;

            });
        });
    }
    clickAction++;
});
