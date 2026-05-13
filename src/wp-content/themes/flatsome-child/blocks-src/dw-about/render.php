<?php
/**
 * Render for dw-about block
 */
$smallText = $attributes['smallText'] ?? '';
$title = $attributes['title'] ?? '';
$description = $attributes['description'] ?? '';
$image = $attributes['image'] ?? '';
$listItems = $attributes['listItems'] ?? [];
$paddingTop = $attributes['paddingTop'] ?? 110;
$paddingBottom = $attributes['paddingBottom'] ?? 110;

$styles = array(
    'padding-top: ' . esc_attr($paddingTop) . 'px',
    'padding-bottom: ' . esc_attr($paddingBottom) . 'px'
);

$wrapper_attributes = get_block_wrapper_attributes( array(
    'class' => 'about-section',
    'style' => implode( ';', $styles )
) );
?>

<section <?php echo $wrapper_attributes; ?>>
    <div class="container">
        <div class="about-grid">
            <div class="about-content">
                <span class="about-small"><?php echo wp_kses_post($smallText); ?></span>
                <h2><?php echo wp_kses_post($title); ?></h2>
                <p><?php echo wp_kses_post($description); ?></p>
                
                <?php if (!empty($listItems)) : ?>
                    <ul class="about-list">
                        <?php foreach ($listItems as $item) : ?>
                            <li>
                                <span class="check-icon">✔</span>
                                <?php echo wp_kses_post($item['text']); ?>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                <?php endif; ?>
            </div>
            <div class="about-image">
                <img src="<?php echo esc_url($image); ?>" alt="<?php echo esc_attr($title); ?>">
            </div>
        </div>
    </div>
</section>
