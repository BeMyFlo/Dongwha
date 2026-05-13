<?php
/**
 * Render for dw-projects block
 */
$smallText = $attributes['smallText'] ?? '';
$title = $attributes['title'] ?? '';
$projects = $attributes['projects'] ?? [];
$paddingTop = $attributes['paddingTop'] ?? 110;
$paddingBottom = $attributes['paddingBottom'] ?? 110;

$styles = array(
    'padding-top: ' . esc_attr($paddingTop) . 'px',
    'padding-bottom: ' . esc_attr($paddingBottom) . 'px'
);

$wrapper_attributes = get_block_wrapper_attributes( array(
    'class' => 'dw-projects-section',
    'style' => implode( ';', $styles )
) );
?>

<section <?php echo $wrapper_attributes; ?>>
    <div class="container">
        <div class="section-title">
            <span><?php echo wp_kses_post($smallText); ?></span>
            <h2><?php echo wp_kses_post($title); ?></h2>
        </div>

        <?php if (!empty($projects)) : ?>
            <div class="project-grid">
                <?php foreach ($projects as $proj) : ?>
                    <div class="project-item">
                        <div class="project-image">
                            <img src="<?php echo esc_url($proj['image']); ?>" alt="<?php echo esc_attr($proj['title']); ?>">
                            <div class="project-overlay">
                                <h4><?php echo wp_kses_post($proj['title']); ?></h4>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>
    </div>
</section>
