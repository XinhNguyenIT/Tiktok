using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class Story
{
    public long Id { get; set; }

    public string UserId { get; set; } = null!;

    public string MediaUrl { get; set; } = null!;

    public string? Caption { get; set; }

    public DateTime ExpiresAt { get; set; }

    public DateTime CreatedAt { get; set; }

    public virtual AspNetUser User { get; set; } = null!;
}
