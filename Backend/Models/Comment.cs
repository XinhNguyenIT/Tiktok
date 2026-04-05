using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class Comment
{
    public long Id { get; set; }

    public long PostId { get; set; }

    public string UserId { get; set; } = null!;

    public long? ParentCommentId { get; set; }

    public string Content { get; set; } = null!;

    public bool? IsActive { get; set; }

    public DateTime CreatedAt { get; set; }

    public virtual ICollection<Comment> InverseParentComment { get; set; } = new List<Comment>();

    public virtual ICollection<Like> Likes { get; set; } = new List<Like>();

    public virtual Comment? ParentComment { get; set; }

    public virtual Post Post { get; set; } = null!;

    public virtual AspNetUser User { get; set; } = null!;
}
