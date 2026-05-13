<?php
/**
 * Render for dw-cta block
 */
$title = $attributes['title'] ?? '';
$subtitle = $attributes['subtitle'] ?? '';
$btnText = $attributes['btnText'] ?? '';
$btnLink = $attributes['btnLink'] ?? '#';
$backgroundImage = $attributes['backgroundImage'] ?? '';
$paddingTop = $attributes['paddingTop'] ?? 140;
$paddingBottom = $attributes['paddingBottom'] ?? 140;

$styles = array(
    'background-image: url(' . esc_url($backgroundImage) . ')',
    'padding-top: ' . esc_attr($paddingTop) . 'px',
    'padding-bottom: ' . esc_attr($paddingBottom) . 'px'
);

$wrapper_attributes = get_block_wrapper_attributes( array(
    'class' => 'cta-section',
    'style' => implode( ';', $styles )
) );
?>

<section <?php echo $wrapper_attributes; ?>>
    <div class="glass-card">
        <h2><?php echo wp_kses_post($title); ?></h2>
        <p><?php echo wp_kses_post($subtitle); ?></p>
        <?php if ($btnText) : ?>
            <a href="<?php echo esc_url($btnLink); ?>" class="btn btn-primary">
                <?php echo esc_html($btnText); ?>
            </a>
        <?php endif; ?>
    </div>
</section>
