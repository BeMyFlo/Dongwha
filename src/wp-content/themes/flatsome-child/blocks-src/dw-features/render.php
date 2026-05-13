<?php
/**
 * Render for dw-features block
 */
$smallText = $attributes['smallText'] ?? '';
$title = $attributes['title'] ?? '';
$features = $attributes['features'] ?? [];
$paddingTop = $attributes['paddingTop'] ?? 110;
$paddingBottom = $attributes['paddingBottom'] ?? 110;

$styles = array(
    'padding-top: ' . esc_attr($paddingTop) . 'px',
    'padding-bottom: ' . esc_attr($paddingBottom) . 'px'
);

$wrapper_attributes = get_block_wrapper_attributes( array(
    'class' => 'blue-section',
    'style' => implode( ';', $styles )
) );
?>

<section <?php echo $wrapper_attributes; ?>>
    <div class="container">
        <div class="section-title">
            <span style="color:#f0f9eb"><?php echo wp_kses_post($smallText); ?></span>
            <h2 style="color:white"><?php echo wp_kses_post($title); ?></h2>
        </div>

        <?php if (!empty($features)) : ?>
            <div class="feature-grid">
                <?php foreach ($features as $feature) : ?>
                    <div class="feature-box">
                        <h4><?php echo wp_kses_post($feature['title']); ?></h4>
                        <p><?php echo wp_kses_post($feature['desc']); ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>
    </div>
</section>
