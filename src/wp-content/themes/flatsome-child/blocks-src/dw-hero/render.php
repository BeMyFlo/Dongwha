<?php
/**
 * Render for dw-hero block
 */
$smallText = $attributes['smallText'] ?? '';
$title = $attributes['title'] ?? '';
$subtitle = $attributes['subtitle'] ?? '';
$backgroundImage = $attributes['backgroundImage'] ?? '';
$features = $attributes['features'] ?? [];
$primaryBtnText = $attributes['primaryBtnText'] ?? '';
$primaryBtnLink = $attributes['primaryBtnLink'] ?? '#';
$secondaryBtnText = $attributes['secondaryBtnText'] ?? '';
$secondaryBtnLink = $attributes['secondaryBtnLink'] ?? '#';
$paddingTop = $attributes['paddingTop'] ?? 0;
$paddingBottom = $attributes['paddingBottom'] ?? 0;

$styles = array(
    'background-image: linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.55)), url(' . esc_url($backgroundImage) . ')',
    'padding-top: ' . esc_attr($paddingTop) . 'px',
    'padding-bottom: ' . esc_attr($paddingBottom) . 'px'
);

$wrapper_attributes = get_block_wrapper_attributes( array(
    'class' => 'hero',
    'style' => implode( ';', $styles )
) );
?>

<section <?php echo $wrapper_attributes; ?>>
    <div class="container">
        <div class="hero-content">
            <small><?php echo wp_kses_post($smallText); ?></small>
            <h1><?php echo wp_kses_post($title); ?></h1>
            <h2><?php echo wp_kses_post($subtitle); ?></h2>

            <?php if (!empty($features)) : ?>
                <div class="hero-features">
                    <?php foreach ($features as $feature) : ?>
                        <div><?php echo wp_kses_post($feature['text']); ?></div>
                    <?php endforeach; ?>
                </div>
            <?php endif; ?>

            <div class="hero-buttons">
                <?php if ($primaryBtnText) : ?>
                    <a href="<?php echo esc_url($primaryBtnLink); ?>" class="btn btn-primary">
                        <?php echo esc_html($primaryBtnText); ?>
                    </a>
                <?php endif; ?>

                <?php if ($secondaryBtnText) : ?>
                    <a href="<?php echo esc_url($secondaryBtnLink); ?>" class="btn btn-outline">
                        <?php echo esc_html($secondaryBtnText); ?>
                    </a>
                <?php endif; ?>
            </div>
        </div>
    </div>
</section>
