using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class Post
{
    public long Id { get; set; }

    public string UserId { get; set; } = null!;

    public string? Caption { get; set; }

    public string MediaUrl { get; set; } = null!;

    public string? ThumbnailUrl { get; set; }

    public string Privacy { get; set; } = null!;

    public bool? IsActive { get; set; }

    public DateTime CreatedAt { get; set; }

    public DateTime UpdatedAt { get; set; }

    public virtual ICollection<Comment> Comments { get; set; } = new List<Comment>();

    public virtual ICollection<Like> Likes { get; set; } = new List<Like>();

    public virtual ICollection<PostReport> PostReports { get; set; } = new List<PostReport>();

    public virtual AspNetUser User { get; set; } = null!;

    public virtual ICollection<Hashtag> Hashtags { get; set; } = new List<Hashtag>();
}
