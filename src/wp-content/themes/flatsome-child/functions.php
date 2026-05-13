<?php
/**
 * Flatsome Child Theme Functions
 */

/**
 * Theme Setup
 */
add_action( 'after_setup_theme', 'dw_theme_setup' );
function dw_theme_setup() {
    // Enable wide and full alignment for blocks
    add_theme_support( 'align-wide' );
    add_theme_support( 'responsive-embeds' );
}

/**
 * Enqueue scripts and styles.
 */
add_action( 'wp_enqueue_scripts', 'flatsome_child_enqueue_styles', 20 );
function flatsome_child_enqueue_styles() {
    // Enqueue Parent Style
    wp_enqueue_style( 'flatsome-style', get_template_directory_uri() . '/style.css' );

    // Enqueue Child Compiled Style (from Webpack)
    wp_enqueue_style( 'flatsome-child-style', get_stylesheet_directory_uri() . '/assets/dist/css/main.min.css', array('flatsome-style'), '1.0.0' );

    // Enqueue Child Compiled JS (from Webpack)
    wp_enqueue_script( 'flatsome-child-js', get_stylesheet_directory_uri() . '/assets/dist/js/main.min.js', array('jquery'), '1.0.0', true );

    // Enqueue Google Fonts
    wp_enqueue_style( 'dw-google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap', array(), null );
}

/**
 * Register Custom Gutenberg Blocks
 */
add_action( 'init', 'dw_register_blocks' );
function dw_register_blocks() {
    $blocks_dir = __DIR__ . '/build';
    
    if ( ! is_dir( $blocks_dir ) ) {
        return;
    }

    // Tự động đăng ký tất cả các block trong thư mục build
    $blocks = glob( $blocks_dir . '/*', GLOB_ONLYDIR );
    if ( $blocks ) {
        foreach ( $blocks as $block ) {
            register_block_type( $block );
        }
    }
}
