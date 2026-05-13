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
?>

<section class="hero" style="background-image: linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.55)), url(<?php echo esc_url($backgroundImage); ?>);">
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
