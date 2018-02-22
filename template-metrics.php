<?php
/*
Template Name: Metrics
*/
?>

<?php get_header(); ?>

    <div id="content">

        <div id="inner-content" class="grid-x grid-margin-x grid-margin-y">

            <div class="large-3 medium-3 small-12 cell ">

                <section id="" class="medium-12 cell">

                    <div class="bordered-box">

                        <ul id="metrics-sidemenu" class="vertical menu accordion-menu" data-accordion-menu data-submenu-toggle="true">

                            <li >
                                <a href="<?php echo esc_attr( site_url( '/metrics/' ) . '#critical_path' ) ?>" onclick="show_critical_path()"><?php esc_html_e( 'Critical Path', 'disciple_tools' )?></a>
                            </li>

                            <?php
                            // @codingStandardsIgnoreLine
                            echo apply_filters( 'dt_metrics_menu', '' );
                            ?>

                        </ul>

                    </div>

                </section>

            </div>

            <div class="large-9 medium-9 small-12 cell ">

                <section id="" class="medium-12 cell">

                    <div class="bordered-box">

                        <div id="chart"></div><!-- Container for charts -->

                    </div>

                </section>

            </div>

        </div> <!-- end #inner-content -->

    </div> <!-- end #content -->

<?php get_footer(); ?>
