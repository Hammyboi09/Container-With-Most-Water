var maxArea = function (height) {
    var leftIndex = 0;
    var rightIndex = height.length - 1;
    var maxStoredWater = 0;

    while (leftIndex < rightIndex) {
        const leftHeight = height[leftIndex];
        const rightHeight = height[rightIndex];
        const width = rightIndex - leftIndex;
        const smallerHeight = leftHeight < rightHeight ? leftHeight : rightHeight;
        const storedWater = width * smallerHeight;

        maxStoredWater = storedWater > maxStoredWater ? storedWater : maxStoredWater;
        smallerHeight == leftHeight ? leftIndex++ : rightIndex--;
    }

    return maxStoredWater;
};