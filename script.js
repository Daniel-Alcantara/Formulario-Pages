$(document).ready(function () {

    var plano_selecionado;
    var plano_mes_ou_anual = "(Monthly)"
    var valor_plano_selecionado;
    var online_service = "false"
    var large_storage = "false"
    var customizable_profile = "false"
    var valor_total;
    var valor_online = 0
    var valor_storage = 0
    var valor_customizable = 0
    var numeral_valor_selecionado = 0


    $(".form_1").css("background-color", "#bee2f8")
    $(".form_1 h3").css("color", "#002248")


    // aplicação de troca de tela e numeração
    $(".next_page2").click(function () {
        $(".container_select_plan").css("display", "block")
        $(".container_personal_info").css("display", "none")
        $(".form_1").css("background-color", "unset")
        $(".form_1 h3").css("color", "white")
        $(".form_2").css("background-color", "#bee2f8")
        $(".form_2 h3").css("color", "#002248")
    })

    $(".return_page1").click(function () {
        $(".container_select_plan").css("display", "none")
        $(".container_personal_info").css("display", "block")
        $(".form_1").css("background-color", "#bee2f8")
        $(".form_1 h3").css("color", "#002248")
        $(".form_2").css("background-color", "unset")
        $(".form_2 h3").css("color", "white")
    })

    $(".next_page3").click(function () {
        $(".container_add-ons_page3").css("display", "block")
        $(".container_select_plan").css("display", "none")
        $(".form_2").css("background-color", "unset")
        $(".form_2 h3").css("color", "white")
        $(".form_3").css("background-color", "#bee2f8")
        $(".form_3 h3").css("color", "#002248")
    })

    $(".return_page2").click(function () {
        $(".container_add-ons_page3").css("display", "none")
        $(".container_select_plan").css("display", "block")
        $(".form_2").css("background-color", "#bee2f8")
        $(".form_2 h3").css("color", "#002248")
        $(".form_3").css("background-color", "unset")
        $(".form_3 h3").css("color", "white")
    })


    $(".return_page3").click(function () {
        $(".container_finishingup_page4").css("display", "none")
        $(".container_add-ons_page3").css("display", "block")
        $(".form_3").css("background-color", "#bee2f8")
        $(".form_3 h3").css("color", "#002248")
        $(".form_4").css("background-color", "unset")
        $(".form_4 h3").css("color", "white")
    })

    // fim da aplicação de troca de tela

    // seleção de plano anual / mensal
    $(".clique_box").click(function () {

        if ($(".clique_box").css("justify-content") == "end") {
            $(".clique_box").css("justify-content", "left")
            $(".title_mes").css("color", "#05265f")
            $(".title_ano").css("color", "#9e9ea5")
            $(".option_anual").css("display", "none")
            $(".value_anual_arcade").html("$9/mo")
            $(".value_anual_pro").html("$12/mo")
            $(".value_anual_advanced").html("$15/mo")
            $(".box_render").css("border", "1px solid #eeee")
            plano_mes_ou_anual = "(Monthly)"
            console.log(plano_mes_ou_anual)
        }
        else {
            $(".clique_box").css("justify-content", "end")
            $(".clique_box").css("cursor", "pointer")
            $(".title_mes").css("color", "#9e9ea5")
            $(".title_ano").css("color", "#05265f")
            $(".option_anual").css("display", "block")
            $(".value_anual_arcade").html("$90/yr")
            $(".value_anual_pro").html("$120/yr")
            $(".value_anual_advanced").html("$150/yr")
            $(".box_render").css("border", "1px solid #eeee")
            plano_mes_ou_anual = "(Yearly)"
            console.log(plano_mes_ou_anual)
        }
    })
    // fim seleção de plano

    // caso usuario troque de plano no final - retorno para parte2
    $(".change_plano").click(function () {
        $(".container_finishingup_page4").css("display", "none")
        $(".container_select_plan").css("display", "block")
        $(".form_2").css("background-color", "#bee2f8")
        $(".form_2 h3").css("color", "#002248")
        $(".form_4").css("background-color", "unset")
        $(".form_4 h3").css("color", "white")
    })
    // fim change.

    // pegando plano selecionado
    $(".box_render").click(function () {
        plano_selecionado = $(this).find(".box_option_title h4").html()
        valor_plano_selecionado = $(this).find(".box_option_title p").html()
        $(this).css("border", "1px solid #726bc0")

        $('.box_render').css("border", "1px solid #726bc0").not(this).css("border", "1px solid #eeee");
        console.log(plano_selecionado)
        console.log(valor_plano_selecionado)
        if (plano_selecionado == "Arcade" && plano_mes_ou_anual == "(Monthly)") {
            numeral_valor_selecionado = 9
        }
        else if (plano_selecionado == "Arcade" && plano_mes_ou_anual == "(Yearly)") {
            numeral_valor_selecionado = 90
        }
        else if (plano_selecionado == "Pro" && plano_mes_ou_anual == "(Monthly)") {
            numeral_valor_selecionado = 12
        }
        else if (plano_selecionado == "Pro" && plano_mes_ou_anual == "(Yearly)") {
            numeral_valor_selecionado = 120
        }
        else if (plano_selecionado == "Advanced" && plano_mes_ou_anual == "(Monthly)") {
            numeral_valor_selecionado = 15
        }
        else if (plano_selecionado == "Advanced" && plano_mes_ou_anual == "(Yearly)") {
            numeral_valor_selecionado = 150
        }

        console.log("VALOR", numeral_valor_selecionado, typeof (numeral_valor_selecionado))
    })
    // fim plano selecionado

    // check qual serviço adicional foi selecionado.

    $(".check_box_design").click(function () {

        if ($(this).css("border-color") == ("rgb(114, 107, 192)")) {
            $(this).css("border", "1px solid #eeee")
            $(this).css("background-color", "unset")
            $(this).find(".input_check input").prop('checked', false)
            if ($(this).find(".text_checkbox h4").html() == "Online service") {
                online_service = "false"
                valor_online = 0
            }
            if ($(this).find(".text_checkbox h4").html() == "Large storage") {
                large_storage = "false"
                valor_storage = 0
            }
            if ($(this).find(".text_checkbox h4").html() == "Customizable profile") {
                customizable_profile = "false"
                valor_customizable = 0
            }
            console.log(online_service)
            console.log(large_storage)
            console.log(customizable_profile)
        }
        else {
            $(this).css("border", "1px solid #726bc0")
            $(this).css("background-color", "#eeee")
            $(this).find(".input_check input").prop('checked', true)
            if ($(this).find(".text_checkbox h4").html() == "Online service") {
                online_service = "true"
                valor_online = 1
            }
            if ($(this).find(".text_checkbox h4").html() == "Large storage") {
                large_storage = "true"
                valor_storage = 2
            }
            if ($(this).find(".text_checkbox h4").html() == "Customizable profile") {
                customizable_profile = "true"
                valor_customizable = 2
            }

        }

    })

    // fim serviço adicional.

    // quando clica no botao para ir para pagina 4.

    $(".next_page4").click(function () {

        // Set padrão
        $(".container_finishingup_page4").css("display", "block")
        $(".container_add-ons_page3").css("display", "none")
        $(".form_3").css("background-color", "unset")
        $(".form_3 h3").css("color", "white")
        $(".form_4").css("background-color", "#bee2f8")
        $(".form_4 h3").css("color", "#002248")
        // Fim set padrão

        valor_total = numeral_valor_selecionado + valor_online + valor_storage + valor_customizable

        $(".plano_text h5").html(plano_selecionado + " " + plano_mes_ou_anual)
        $(".plano_value p").html(valor_plano_selecionado)

        if (plano_mes_ou_anual == "(Yearly)") {
            $(".valor_total_value p").html("+$" + valor_total + "/yr")
        }
        else if (plano_mes_ou_anual != "(Yearly)") {
            $(".valor_total_value p").html("+$" + valor_total + "/mo")

        }


        if (online_service == "true") {
            $("#online").css("display", "block")
            $("#value_online").css("display", "block")
        }
        if (large_storage == "true") {
            $("#storage").css("display", "block")
            $("#value_storage").css("display", "block")
        }
        if (customizable_profile == "true") {
            $("#customizable").css("display", "block")
            $("#value_customizable").css("display", "block")
        }
        if (online_service == "false") {
            $("#online").css("display", "none")
            $("#value_online").css("display", "none")
        }
        if (large_storage == "false") {
            $("#storage").css("display", "none")
            $("#value_storage").css("display", "none")
        }
        if (customizable_profile == "false") {
            $("#customizable").css("display", "none")
            $("#value_customizable").css("display", "none")
        }
    })


})