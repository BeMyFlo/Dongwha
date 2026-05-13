<?php
/**
 * Render for dw-products block
 */
$smallText = $attributes['smallText'] ?? '';
$title = $attributes['title'] ?? '';
$description = $attributes['description'] ?? '';
$products = $attributes['products'] ?? [];
?>

<section class="dw-products-section">
    <div class="container">
        <div class="section-title">
            <span><?php echo wp_kses_post($smallText); ?></span>
            <h2><?php echo wp_kses_post($title); ?></h2>
            <p><?php echo wp_kses_post($description); ?></p>
        </div>

        <?php if (!empty($products)) : ?>
            <div class="product-grid">
                <?php foreach ($products as $product) : ?>
                    <div class="product-card">
                        <?php if (!empty($product['image'])) : ?>
                            <img src="<?php echo esc_url($product['image']); ?>" alt="<?php echo esc_attr($product['title']); ?>">
                        <?php endif; ?>
                        <div class="product-content">
                            <h3><?php echo wp_kses_post($product['title']); ?></h3>
                            <p><?php echo wp_kses_post($product['desc']); ?></p>
                            <?php if (!empty($product['link'])) : ?>
                                <a href="<?php echo esc_url($product['link']); ?>">Xem chi tiết →</a>
                            <?php endif; ?>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>
    </div>
</section>
